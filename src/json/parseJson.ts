export function parseJson<T = any>(v: any): T | undefined;
export function parseJson<T = any, TDef = any>(v: any, defVal: TDef): T | TDef;
export function parseJson<T = any, TDef = any>(v: any, defVal?: TDef): T | TDef | undefined {
  try {
    return JSON.parse(v) as T;
  } catch (error) {
    return defVal;
  }
}
