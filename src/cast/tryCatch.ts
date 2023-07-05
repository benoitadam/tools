import { isFunction } from "../check";

export default function tryCatch<T>(fun: () => T): T | undefined;
export default function tryCatch<T, U>(fun: () => T, def: () => U): T | U;
export default function tryCatch<T, U>(fun: () => T, def: U): T | U;
export default function tryCatch(fun: () => any, def?: any): any {
  try {
    return fun();
  } catch (error) {
    return isFunction(def) ? def() : def;
  }
}