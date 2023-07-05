import isString from "../check/isString";
import isNumber from "../check/isNumber";
import isNil from "../check/isNil";

export default function toDate(v: any): Date;
export default function toDate<TDef>(v: any, defVal: TDef): Date | TDef;
export default function toDate<TDef>(v: any, defVal?: TDef): Date | TDef | undefined;
export default function toDate<TDef>(v: any, defVal?: TDef): Date | TDef | undefined {
  return v instanceof Date ? v :
    isString(v) || isNumber(v) ? new Date(v) :
      isNil(v) ? new Date() : defVal
}
