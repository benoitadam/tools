export function toArray<T = any>(v: T[]|T|null|undefined): T[];
export function toArray<T = any>(v: any, def: T[]): T[];
export function toArray<T = any>(v: any, def: T[] = []): T[] {
    return v === null || v === undefined ? def : Array.isArray(v) ? v : [v];
}
