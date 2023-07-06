import groupBy, { IKey, IVal, RKey, RVal } from './groupBy';

type IKey<T> = undefined | null | keyof T | ((item: T, index: number) => any);
type IVal<T, U> = undefined | null | keyof T | ((item: T, index: number) => U);

type RKey<T> = undefined | null | keyof T | ((item: T, key: string) => any);
type RVal<T, U> = undefined | null | keyof T | ((item: T, key: string) => U);

interface ValueBy {
  <T>(items: T[], key: IKey<T>): Record<string, T>;
  <T, U>(items: T[], key: IKey<T>, val: IVal<T, U>): Record<string, U>;
  <T>(record: Record<string, T>, key: RKey<T>): Record<string, T>;
  <T, U>(record: Record<string, T>, key: RKey<T>, val: RVal<T, U>): Record<string, U>;
}

export default ((items: any, key: any, val?: any): Record<string, any> => {
  const r: Record<string, any[]> = {};
  const getK = isFunction(key) ? key : isNil(key) ? (_: any, k: any) => k : (i: any) => i[key];
  const getV = isFunction(val) ? val : isNil(val) ? (i: any) => i : (i: any) => i[val];
  if (isArray(items)) {
    items.forEach((item, index) => {
      r[getK(item, index)] = getV(item, index);
    });
  }
  if (isRecord(items)) {
    Object.entries(items).forEach((kv) => {
      const key = kv[0],
        val = kv[1];
      r[getK(val, key)] = getV(val, key);
    });
  }
  return r;
}) as ValueBy;
