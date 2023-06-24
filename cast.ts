export function str(v: any, def: string = ''): string {
    return v === null || v === undefined ? def : String(v);
}

export function arr<T = any>(v: T): T[];
export function arr<T = any>(v: T[]): T[];
export function arr<T = any>(v: any, def: T[] = []): T[] {
    return v === null || v === undefined ? def : Array.isArray(v) ? v : [v];
}

export function obj<T = any>(v: T | null | undefined): T | Partial<T>;
export function obj<T = any, U = any>(v: T | null | undefined, def: U): T | U;
export function obj<T = any>(v: any, def: T = {} as any): T {
    return v === null || typeof v !== 'object' || Array.isArray(v) ? def : v;
}

export function nbr(v: any): number | undefined;
export function nbr<D>(v: any, nanVal: D): number | D;
export function nbr<D>(v: any, nanVal?: D): number | D | undefined {
    const clean = typeof v === 'string' ? v.replace(/,/g, '.').replace(/[^0-9\-\.]/g, '') : String(v);
    const nbr = clean !== '' ? Number(clean) : Number.NaN;
    return Number.isNaN(nbr) ? nanVal : nbr;
}

export function bool(v: any): boolean | undefined;
export function bool<T>(v: any, defVal: T): boolean | T;
export function bool<T = boolean>(v: any, defVal?: T | boolean): boolean | T | undefined {
    if (typeof v === 'string') return v === 'true' || v === 'ok' || v === 'on';
    return v === undefined || v === null ? defVal : !!v;
}

export function err(error: any): Error {
    return error instanceof Error ? error : new Error(String(error));
}

export function date(v: any): Date;
export function date<TDef>(v: any, defVal: TDef): Date | TDef;
export function date<TDef>(v: any, defVal?: TDef): Date | TDef | undefined {
    return (v instanceof Date) ? v :
        (typeof v === 'string') ? new Date(v) :
            (typeof v === 'number') ? new Date(v) :
                defVal === undefined ? new Date() : defVal;
}

export const toString = str;
export const toArray = arr;
export const toObject = obj;
export const toNumber = nbr;
export const toBoolean = bool;
export const toError = err;
export const toDate = date;