export function parseJson<T = any>(v: any): T | undefined;
export function parseJson<T = any, TDef = any>(v: any, defVal: TDef): T | TDef;
export function parseJson<T = any, TDef = any>(v: any, defVal?: TDef): T | TDef | undefined {
    try {
        return JSON.parse(v) as T;
    }
    catch (error) {
        return defVal;
    }
}

export function getJson(v: any): string | undefined;
export function getJson<TDef = any>(v: any, defVal: TDef, indented?: boolean): string | TDef;
export function getJson<TDef = any>(v: any, defVal?: TDef, indented?: boolean): string | TDef | undefined {
    try {
        return JSON.stringify(v, null, indented ? 2 : 0);
    }
    catch (error) {
        return defVal;
    }
}

export function clone<T = any>(v: T): T;
export function clone<T = any>(v: T, defVal: T): T;
export function clone<T = any>(v: T, defVal?: T): T | undefined {
    return parseJson(getJson(v), defVal);
}