import isRecord from "../check/isRecord";

export default function toRecord<T = any>(v: T | null | undefined): T | Partial<T>;
export default function toRecord<T = any, U = any>(v: T | null | undefined, def: U): T | U;
export default function toRecord<T = any>(v: any, def: T = {} as any): T {
  return isRecord(v) ? v : def;
}