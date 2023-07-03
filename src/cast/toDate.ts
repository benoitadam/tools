export function toDate(v: any): Date;
export function toDate<TDef>(v: any, defVal: TDef): Date | TDef;
export function toDate<TDef>(v: any, defVal?: TDef): Date | TDef | undefined {
  return v instanceof Date
    ? v
    : typeof v === 'string'
    ? new Date(v)
    : typeof v === 'number'
    ? new Date(v)
    : defVal === undefined
    ? new Date()
    : defVal;
}
