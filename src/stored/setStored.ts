import isUndefined from '../check/isUndefined';
import getJson from '../json/getJson';
import storage from './storage';

export default <T = any>(key: string, value: T) => {
  const json = isUndefined(value) ? undefined : getJson(value);
  if (isUndefined(json)) storage().removeItem(key);
  else storage().setItem(key, json);
}
