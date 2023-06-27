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