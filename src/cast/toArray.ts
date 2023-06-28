import { isArray } from "../check/isArray";
import { isNil } from "../check/isNil";

export function toArray<T = any>(v: T[]|T|null|undefined): T[];
export function toArray<T = any>(v: any, def: T[]): T[];
export function toArray<T = any>(v: any, def: T[] = []): T[] {
    return isNil(v) ? def : isArray(v) ? v : [v];
}
