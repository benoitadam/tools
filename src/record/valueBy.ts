import { isRecord } from '../check/isRecord';
import { isArray } from '../check/isArray';
import { isFunction } from '../check/isFunction';
import { isNil } from '../check/isNil';

type IKey<T> = undefined | null | keyof T | ((item: T, index: number) => any);
type IVal<T, U> = undefined | null | keyof T | ((item: T, index: number) => U);

type RKey<T> = undefined | null | keyof T | ((item: T, key: string) => any);
type RVal<T, U> = undefined | null | keyof T | ((item: T, key: string) => U);

export function valueBy<T>(items: T[], key: IKey<T>): Record<string, T>;
export function valueBy<T, U>(items: T[], key: IKey<T>, val: IVal<T, U>): Record<string, U>;
export function valueBy<T>(record: Record<string, T>, key: RKey<T>): Record<string, T>;
export function valueBy<T, U>(record: Record<string, T>, key: RKey<T>, val: RVal<T, U>): Record<string, U>;
export function valueBy(items: any, key: any, val?: any): Record<string, any> {
  const r: Record<string, any[]> = {};
  const getK = isFunction(key) ? key : isNil(key) ? (_: any, k: any) => k : (i: any) => i[key];
  const getV = isFunction(val) ? val : isNil(val) ? (i: any) => i : (i: any) => i[val];
  if (isArray(items)) {
    items.forEach((item, index) => {
      r[getK(item, index)] = getV(item, index);
    });
  }
  if (isRecord(items)) {
    Object.entries(items).forEach(([key, item]) => {
      r[getK(item, key)] = getV(item, key);
    });
  }
  return r;
}
