import isFunction from '../check/isFunction';
import getStored from '../stored/getStored';
import setStored from '../stored/setStored';

export type ObserverHandler<T> = (value: T, oldValue: T) => void;

export type ObserverFilter<T> = (value: T) => boolean;
const nullObserverFilter: ObserverFilter<any> = (v: any) => v !== null && v !== undefined;

export interface ISubscription {
	unsubscribe(): void;
}

export interface ISubscribe<T> {
	subscribe(handler: (next: T) => void): ISubscription;
}

export default class Observer<T = any> implements ISubscribe<T> {
  /** Value */
  val: T;
  key?: string;
  name?: string;

  /** Handlers */
  private hs: ObserverHandler<T>[] = [];

  /** map and debounce */
  private src?: Observer;
  private srcOff?: () => void;
  private srcH?: ObserverHandler<any>;

  private sKey?: string;

  constructor(init: T, key?: string) {
    this.val = init;
    if (key) this.key = key;
  }

  get value() {
    return this.get();
  }

  get() {
    return this.val;
  }

  next(value: T) {
    if (value !== this.val) {
      const old = this.val;
      this.val = value;
      this.hs.forEach((h) => h(this.val, old));
    }
    return this;
  }

  set(value: T | ((value: T) => T)) {
    return this.next(isFunction(value) ? value(this.val) : value);
  }

  subscribe(handler: (next: T) => void): ISubscription {
    return { unsubscribe: this.on(handler) }
  }

  pipe(observer: Observer<T>) {
    observer.set(this.val);
    return this.on(val => observer.set(val));
  }

  on(h: ObserverHandler<T>) {
    this.hs.push(h);
    if (!this.srcOff && this.src && this.srcH) {
      this.srcOff = this.src.on(this.srcH);
    }
    return () => this.off(h);
  }

  off(h: ObserverHandler<T>) {
    this.hs.splice(this.hs.indexOf(h), 1);
    if (this.srcOff && this.hs.length === 0) {
      this.srcOff();
      delete this.srcOff;
    }
  }

  store(key: string) {
    if (this.sKey === key) return this;
    this.sKey = key;
    this.on((val) => setStored(key, val));
    const val = getStored(key);
    if (val !== undefined) this.set(val);
    return this;
  }

  map<U>(cb: (val: T) => U) {
    const r = new Observer<U>(cb(this.val));
    r.src = this;
    r.srcH = () => r.set(cb(this.val));
    return r;
  }

  /**
   * @example
   * a b c - - - d - - e - -
   * - - - - c - - - d - - e
   */
  debounce(ms: number) {
    let timer: any;
    const r = new Observer<T>(this.val);
    r.src = this;
    r.srcH = () => {
      clearTimeout(timer);
      timer = setTimeout(() => r.set(this.val), ms);
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
  throttle(ms: number) {
    let timer: any = null;
    let last = 0;
    const r = new Observer<T>(this.val);
    r.src = this;
    const update = () => {
      timer = null;
      last = Date.now();
      r.set(this.val);
    };
    r.srcH = () => {
      if (timer !== null) return;
      const nextMs = ms - (Date.now() - last);
      if (nextMs < 0) return update();
      timer = setTimeout(update, nextMs);
    };
    return r;
  }

  toPromise(filter: ObserverFilter<T> = nullObserverFilter) {
    return new Promise<T>((resolve) => {
      if (filter(this.val)) return resolve(this.val);
      const off = this.on((val) => {
        if (!filter(val)) return;
        off();
        resolve(val);
      });
    });
  }
}
