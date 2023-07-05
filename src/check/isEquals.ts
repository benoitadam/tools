import getJson from "../json/getJson";
import isRecord from "./isRecord";

export default function isEquals(a: any, b: any): boolean {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) return false;
        if (a.length !== b.length) return false;
        for (let i = 0, l = a.length; i < l; i++) if (!isEquals(a[i], b[i])) return false;
        return true;
    }
    if (a instanceof Object) {
        if (!isRecord(b)) return false;
        if (Object.keys(a).length !== Object.keys(b).length) return false;
        for (const prop in a) if (!isEquals(a[prop], b[prop])) return false;
        return true;
    }
    return getJson(a) === getJson(b);
}