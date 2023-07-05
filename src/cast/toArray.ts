
import isNil from '../check/isNil';

export default function toArray<T = any>(v: T[] | T | null | undefined): T[];
export default function toArray<T = any>(v: any, def: T[]): T[];
export default function toArray<T = any>(v: any, def: T[] = []): T[] {
  return isNil(v) ? def : Array.isArray(v) ? v : [v]
}
