import { Observer } from "./Observer";
import { getObserver } from "./getObserver";

export function getStored<T = any>(key: string, init?: T): Observer<T> {
    return getObserver(key, init).store(key);
}