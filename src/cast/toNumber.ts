import isString from '../check/isString';

export default function toNumber(v: any): number | undefined;
export default function toNumber<D>(v: any, nanVal: D): number | D;
export default function toNumber<D>(v: any, nanVal?: D): number | D | undefined {
  const clean = isString(v) ? v.replace(/,/g, '.').replace(/[^0-9\-\.]/g, '') : String(v);
  const nbr = clean !== '' ? Number(clean) : Number.NaN;
  return Number.isNaN(nbr) ? nanVal : nbr;
}) as ToNumber;
