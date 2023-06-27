export function toObject<T = any>(v: T | null | undefined): T | Partial<T>;
export function toObject<T = any, U = any>(v: T | null | undefined, def: U): T | U;
export function toObject<T = any>(v: any, def: T = {} as any): T {
    return v === null || typeof v !== 'object' || Array.isArray(v) ? def : v;
}