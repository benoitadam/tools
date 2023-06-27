export function toBoolean(v: any): boolean | undefined;
export function toBoolean<T>(v: any, defVal: T): boolean | T;
export function toBoolean<T = boolean>(v: any, defVal?: T | boolean): boolean | T | undefined {
    if (typeof v === 'string') return v === 'true' || v === 'ok' || v === 'on';
    return v === undefined || v === null ? defVal : !!v;
}