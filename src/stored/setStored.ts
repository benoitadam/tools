import isNil from '../check/isNil';
import getJson from '../json/getJson';
import { getStorage } from './storage';

export default function setStored<T = any>(key: string, value: T) {
  const json = isNil(value) ? undefined : getJson(value);
  if (isNil(json)) storage().removeItem(key);
  else storage().setItem(key, json);
};
