import { isNil } from "../check/isNil";
import { isString } from "../check/isString";

export function toBoolean(v: any): boolean | undefined;
export function toBoolean<T>(v: any, defVal: T): boolean | T;
export function toBoolean<T = boolean>(v: any, defVal?: T | boolean): boolean | T | undefined {
    if (isString(v)) return ['true', 'ok', 'on', '1'].indexOf(String(v).toLowerCase()) !== -1;
    return isNil(v) ? defVal : !!v;
}