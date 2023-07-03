import isNull from "./isNull";
import isUndefined from "./isUndefined";

export default (value: any): boolean => isNull(value) || isUndefined(value);