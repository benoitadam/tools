import isNumber from "../check/isNumber";

export default function bounds(val: number, min?: number, max?: number): number {
  return (isNumber(min) && val < min) ? min :
    (isNumber(max) && val > max) ? max :
      val;
}