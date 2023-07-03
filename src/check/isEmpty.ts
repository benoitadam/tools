import { isArray } from './isArray';
import { isNil } from './isNil';
import { isRecord } from './isRecord';

export function isEmpty(value: any): boolean {
  return (
    isNil(value) ||
    value === '' ||
    (isArray(value) && value.length === 0) ||
    (isRecord(value) && Object.keys(value).length === 0)
  );
}
