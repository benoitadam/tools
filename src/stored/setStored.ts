import { getJson } from '../json/getJson';
import { storage } from './storage';

export function setStored<T = any>(key: string, value: T) {
  const json = value !== undefined ? getJson(value) : undefined;
  if (json === undefined) storage().removeItem(key);
  else storage().setItem(key, json);
}
