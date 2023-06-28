export function toArray<T extends string|number|Date|{}>(v: T): T[];
export function toArray<T = any>(v: T[]): T[];
export function toArray<T = any>(v: any, def: T[]): T[];
export function toArray<T = any>(v: any, def: T[] = []): T[] {
    return v === null || v === undefined ? def : Array.isArray(v) ? v : [v];
}
