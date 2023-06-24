import { getJson, parseJson } from "./json";

export interface Storage {
    getItem(key: string): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}

let _storage: Storage = globalThis.localStorage;

export function setStorage(storage: Storage) {
    _storage = storage;
}

export function getStored<T = any>(key: string): T | undefined;
export function getStored<T = any>(key: string, defVal?: T): T;
export function getStored<T = any>(key: string, defVal?: T): T | undefined {
    const json = _storage.getItem(key);
    return parseJson(json, defVal);
}

export function setStored<T = any>(key: string, value: T) {
    const json = value !== undefined ? getJson(value) : undefined;
    if (json === undefined) _storage.removeItem(key);
    else _storage.setItem(key, json);
}
