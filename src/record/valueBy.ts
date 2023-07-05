import groupBy, { IKey, IVal, RKey, RVal } from './groupBy';

export default function valueBy<T>(items: T[], key: IKey<T>): Record<string, T>;
export default function valueBy<T, U>(items: T[], key: IKey<T>, val: IVal<T, U>): Record<string, U>;
export default function valueBy<T>(record: Record<string, T>, key: RKey<T>): Record<string, T>;
export default function valueBy<T, U>(record: Record<string, T>, key: RKey<T>, val: RVal<T, U>): Record<string, U>;
export default function valueBy(items: any, key: any, val?: any): Record<string, any> {
  return Object.fromEntries(Object.entries(groupBy(items, key, val)).map(kv => [kv[0], kv[1][0]]));
}