import parseJson from '../json/parseJson';
import { getStorage } from './storage';

export default function getStored<T = any>(key: string): T | undefined;
export default function getStored<T = any>(key: string, defVal?: T): T;
export default function getStored<T = any>(key: string, defVal?: T): T | undefined {
  return parseJson(getStorage().getItem(key), defVal);
}
