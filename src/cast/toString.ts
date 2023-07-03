import { isNil } from '../check/isNil';

export function toString(v: any, def: string = ''): string {
  return isNil(v) ? def : String(v);
}

export const str = (v: any) => toString(v);
