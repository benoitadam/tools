import { isArray } from "./isArray";
import { isObject } from "./isObject";

export function isEmpty(arg: any): boolean {
    return arg === null ||
        arg === undefined ||
        arg === '' ||
        (isArray(arg) && arg.length === 0) ||
        (isObject(arg) && Object.keys(arg).length === 0);
}