import tryCatch from "../cast/tryCatch";

export default function parseJson<T>(v: any): T | undefined;
export default function parseJson<T, U>(v: any, def: U): T | U;
export default function parseJson<T, U>(v: any, def?: U): T | U | undefined {
  return tryCatch(() => JSON.parse(v) as T, def);
}