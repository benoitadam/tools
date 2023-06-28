import { isArray } from "./isArray";

export function isRecord(arg: any): boolean {
    return typeof arg === "object" && !isArray(arg);
}