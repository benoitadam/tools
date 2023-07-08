import { removeItem } from '../array';
import isFunction from '../check/isFunction';
import isNotNull from '../check/isNotNull';
import debounce from '../promise/debounce';
import throttle from '../promise/throttle';
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

  get key(): string | undefined {
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
    return { unsubscribe: this.on(handler) };
  }

  pipe(target: IMsgSet<T>) {
    target.set(this.v);
    return this.on((val) => target.set(val));
  }

  on(handler: IMsgHandler<T>) {
    this.h.push(handler);
    if (!this.sO && this.s && this.sH) {
      this.sO = this.s.on(this.sH);
    }
    return () => this.off(handler);
  }

  off(handler: IMsgHandler<T>) {
    removeItem(this.h, handler);
    if (this.sO && this.h.length === 0) {
      this.sO();
      delete this.sO;
    }
  }

  map<U>(cb: (value: T) => U): IMsgReadonly<U>;
  map<U>(cb: (value: T) => U, sourceHandler: (target: IMsg<U>) => IMsgHandler<any>): IMsgReadonly<U>;
  map<U>(cb: (value: T) => U, sourceHandler?: (target: IMsg<U>) => IMsgHandler<any>): IMsgReadonly<U> {
    const source = this;
    const target = new Msg<U>(cb(source.v));
    target.s = source;
    target.sH = sourceHandler ? sourceHandler(target) : () => target.set(cb(source.v));
    return target;
  }

  debounce(ms: number): IMsgReadonly<T> {
    return this.map(() => this.v, target => debounce(next => target.set(next), ms));
  }

  throttle(ms: number): IMsgReadonly<T> {
    return this.map(() => this.v, target => throttle(next => target.set(next), ms));
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
