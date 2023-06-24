import { getStored, setStored } from "./stored";

export type MsgHandler<T> = (value: T, oldValue: T) => void;

export type MsgFilter<T> = (value: T) => boolean;
const nullMsgFilter: MsgFilter<any> = (v: any) => v !== null && v !== undefined;

export class Msg<T = any> {
  /** Handlers */
  private hs: MsgHandler<T>[] = [];

  /** Value */
  val: T;

  /** map and debounce */
  private src?: Msg;
  private srcOff?: () => void;
  private h?: MsgHandler<any>;

  constructor(init: T) {
    this.val = init;
  }
  
  get() {
    return this.val;
  }

  set(value: T) {
    if (value !== this.val) {
      const old = this.val;
      this.val = value;
      this.hs.forEach((h) => h(value, old));
    }
    return this;
  }

  setCb(cb: (value: T) => T) {
    this.set(cb(this.val));
  }

  on(h: MsgHandler<T>) {
    this.hs.push(h);
    if (!this.srcOff && this.src && this.h) {
      this.srcOff = this.src.on(this.h);
    }
    return () => this.off(h);
  }

  off(h: MsgHandler<T>) {
    this.hs.splice(this.hs.indexOf(h), 1);
    if (this.srcOff && this.hs.length === 0) {
      this.srcOff();
      delete this.srcOff;
    }
  }
  
  store(key: string) {
    this.on((val) => setStored(key, val));
    const val = getStored(key);
    if (val !== undefined) this.set(val);
    return this;
  }

  map<U>(cb: (val: T) => U) {
    const r = new Msg<U>(cb(this.val));
    r.src = this;
    r.h = () => r.set(cb(this.val));
    return r;
  }

  debounce(ms: number) {
    let timer: any;
    const r = new Msg<T>(this.val);
    r.src = this;
    r.h = () => {
      clearTimeout(timer);
      timer = setTimeout(() => r.set(this.val), ms);
    };
    return r;
  }

  toPromise(filter: MsgFilter<T> = nullMsgFilter) {
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

export const msgs: Record<string, Msg> = {};
export default function msg<T = any>(key?: string|null, init?: T) {
  if (key) return msgs[key] || (msgs[key] = new Msg(init));
  return new Msg(init);
}