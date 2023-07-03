import isDate from "../check/isDate";
import isString from "../check/isString";
import isNumber from "../check/isNumber";
import isUndefined from "../check/isUndefined";

interface ToDate {
  (v: any): Date;
  <TDef>(v: any, defVal: TDef): Date | TDef;
  <TDef>(v: any, defVal?: TDef): Date | TDef | undefined;
}

export default (
  <TDef>(v: any, defVal?: TDef): Date | TDef | undefined =>
    isDate(v) ? v :
    isString(v) || isNumber(v) ? new Date(v) :
    isUndefined(v) ? new Date() : defVal
) as ToDate;
