import { isArray } from "./isArray";

export function isRecord<T>(value: null|undefined|Record<string, T>): value is Record<string, T>;
export function isRecord(value: any): value is Record<string, any>;
export function isRecord(value: any): value is Record<string, any> {
    return typeof value === "object" && !isArray(value);
}