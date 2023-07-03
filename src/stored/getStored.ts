import { parseJson } from '../json/parseJson';
import { storage } from './storage';

export function getStored<T = any>(key: string): T | undefined;
export function getStored<T = any>(key: string, defVal?: T): T;
export function getStored<T = any>(key: string, defVal?: T): T | undefined {
  const json = storage().getItem(key);
  return parseJson(json, defVal);
}
