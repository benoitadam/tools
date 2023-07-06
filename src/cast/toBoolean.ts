import isNil from '../check/isNil';
import isString from '../check/isString';

export default function toBoolean(v: any): boolean | undefined;
export default function toBoolean<T>(v: any, defVal: T): boolean | T;
export default function toBoolean<T = boolean>(v: any, defVal?: T | boolean): boolean | T | undefined {
  return isString(v)
    ? ['true', 'ok', 'on', '1'].indexOf(String(v).toLowerCase()) !== -1
    : isNil(v) ? defVal : !!v;
}

export default (<T = boolean>(v: any, defVal?: T | boolean): boolean | T | undefined =>
  isString(v)
    ? ['true', 'ok', 'on', '1'].indexOf(String(v).toLowerCase()) !== -1
    : isNil(v)
    ? defVal
    : !!v) as ToBoolean;
