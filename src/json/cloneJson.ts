import {parseJson} from "./parseJson";
import {getJson} from "./getJson";

export function cloneJson<T = any>(v: T): T;
export function cloneJson<T = any>(v: T, defVal: T): T;
export function cloneJson<T = any>(v: T, defVal?: T): T | undefined {
    return parseJson(getJson(v), defVal);
}