import isFunction from '../check/isFunction';
import isNotNull from '../check/isNotNull';
import getStored from '../stored/getStored';
import setStored from '../stored/setStored';
import { IMsg, IMsgFilter, IMsgHandler, IMsgReadonly, IMsgSet, IMsgSubscription } from './types';

export default class Msg<T = any> implements IMsg<T> {
  static byKey: Record<string, Msg> = {};

  static get<T>(key: string, initValue: T, isStored?: boolean) {
    let msg = this.byKey[key];
    if (msg) return msg;
    msg = new Msg<T>(initValue, key);
    if (isStored) {
      msg.set(getStored(key, initValue));
      msg.on((val) => setStored(key, val));
    }
    this.byKey[key] = msg;
    return msg;
  }

  private k?: string;

  /** Value */
  private v: T;

  /** Handlers */
  private h: IMsgHandler<T>[] = [];

  /** map and debounce */
  private s?: Msg;
  private sO?: () => void;
  private sH?: IMsgHandler<any>;

  constructor(initValue: T, key?: string) {
    this.v = initValue;
    if (key) this.k = key;
  }

  get val(): T {
    return this.get();
  }

  get value(): T {
    return this.get();
  }
  
  get key(): string|undefined {
    return this.k;
  }

  get(): T {
    return this.v;
  }

  set(value: T) {
    if (value !== this.v) {
      const old = this.v;
      this.v = value;
      this.h.forEach((h) => h(this.v, old));
    }
    return this;
  }

  next(value: T | ((value: T) => T)) {
    return this.set(isFunction(value) ? value(this.v) : value);
  }

  subscribe(handler: (next: T) => void): IMsgSubscription {
    return { unsubscribe: this.on(handler) }
  }

  pipe(target: IMsgSet<T>) {
    target.set(this.v);
    return this.on(val => target.set(val));
  }

  on(h: IMsgHandler<T>) {
    this.h.push(h);
    if (!this.sO && this.s && this.sH) {
      this.sO = this.s.on(this.sH);
    }
    return () => this.off(h);
  }

  off(h: IMsgHandler<T>) {
    this.h.splice(this.h.indexOf(h), 1);
    if (this.sO && this.h.length === 0) {
      this.sO();
      delete this.sO;
    }
  }

  map<U>(cb: (val: T) => U): IMsgReadonly<U> {
    const r = new Msg<U>(cb(this.v));
    r.s = this;
    r.sH = () => r.set(cb(this.v));
    return r;
  }

  /**
   * @example
   * a b c - - - d - - e - -
   * - - - - c - - - d - - e
   */
  debounce(ms: number): IMsgReadonly<T> {
    let timer: any;
    const r = new Msg<T>(this.v);
    r.s = this;
    r.sH = () => {
      clearTimeout(timer);
      timer = setTimeout(() => r.set(this.v), ms);
    };
    return r;
  }

  /**
   * @example
   * a b c d - - - - e - f g - -
   * a - c - d - - - e - f - g - (2s)
   * a - - d - - - - e - - g - - (3s)
   * a - - - d - - - e - - - g - (4s)
   */
  throttle(ms: number): IMsgReadonly<T> {
    let timer: any = null;
    let last = 0;
    const r = new Msg<T>(this.v);
    r.s = this;
    const update = () => {
      timer = null;
      last = Date.now();
      r.set(this.v);
    };
    r.sH = () => {
      if (timer !== null) return;
      const nextMs = ms - (Date.now() - last);
      if (nextMs < 0) return update();
      timer = setTimeout(update, nextMs);
    };
    return r;
  }

  toPromise(filter: IMsgFilter<T> = isNotNull) {
    return new Promise<T>((resolve) => {
      if (filter(this.v)) return resolve(this.v);
      const off = this.on((val) => {
        if (!filter(val)) return;
        off();
        resolve(val);
      });
    });
  }
}
