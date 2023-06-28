import { isArray } from "./isArray";
import { isRecord } from "./isRecord";

export function isEmpty(arg: any): boolean {
    return arg === null ||
        arg === undefined ||
        arg === '' ||
        (isArray(arg) && arg.length === 0) ||
        (isRecord(arg) && Object.keys(arg).length === 0);
}