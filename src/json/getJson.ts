import tryCatch from '../cast/tryCatch';

export default function getJson(v: any): string | undefined;
export default function getJson<T = any>(v: any, defVal: T, indented?: number): string | T;
export default function getJson<T>(v: any, def?: T, indented?: number): string | T | undefined {
  return tryCatch(() => JSON.stringify(v, null, indented), def);
}

export default (<T>(v: any, def?: T, indented?: boolean): string | T | undefined =>
  tryCatch(() => JSON.stringify(v, null, indented ? 2 : 0), def)) as GetJson;
