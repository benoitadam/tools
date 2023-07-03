export function toNumber(v: any): number | undefined;
export function toNumber<D>(v: any, nanVal: D): number | D;
export function toNumber<D>(v: any, nanVal?: D): number | D | undefined {
  const clean = typeof v === 'string' ? v.replace(/,/g, '.').replace(/[^0-9\-\.]/g, '') : String(v);
  const nbr = clean !== '' ? Number(clean) : Number.NaN;
  return Number.isNaN(nbr) ? nanVal : nbr;
}

export const nbr = (v: any) => toNumber(v, 0);
