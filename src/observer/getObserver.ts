import Observer from './Observer';

const byKey: Record<string, Observer> = {};

export default <T = any>(key: string | null, init?: T, isStored?: boolean): Observer<T> => {
  if (key === null) return new Observer<T>(init!);
  return byKey[key] || (byKey[key] = isStored ? new Observer<T>(init!, key) : new Observer<T>(init!, key).store(key));
}
