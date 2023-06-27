import {parseJson} from "./json/parseJson";
import {getJson} from "./json/getJson";

export function clone<T = any>(v: T): T;
export function clone<T = any>(v: T, defVal: T): T;
export function clone<T = any>(v: T, defVal?: T): T | undefined {
    return parseJson(getJson(v), defVal);
}