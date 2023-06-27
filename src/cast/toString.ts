export function toString(v: any, def: string = ''): string {
    return v === null || v === undefined ? def : String(v);
}