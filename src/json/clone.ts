import parseJson from './parseJson';
import getJson from './getJson';

export default function clone<T>(v: T): T;
export default function clone<T>(v: T, defVal: T): T;
export default function clone<T>(v: T, defVal?: T): T | undefined {
  return parseJson(getJson(v), defVal);
}