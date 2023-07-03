import parseJson from '../json/parseJson';
import storage from './storage';

interface GetStored {
  <T = any>(key: string): T | undefined;
  <T = any>(key: string, defVal?: T): T;
}

export default (<T = any>(key: string, defVal?: T): T | undefined => parseJson(storage().getItem(key), defVal)) as GetStored
