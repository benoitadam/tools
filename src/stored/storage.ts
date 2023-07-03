export interface Storage {
  getItem(key: string): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
}

const values: any = {};
let _storage: Storage = globalThis.localStorage || {
  getItem: (key: string) => values[key] || null,
  removeItem: (key: string) => {
    delete values[key];
  },
  setItem: (key: string, value: string) => (values[key] = value),
};

export function storage(storage?: Storage) {
  if (storage) _storage = storage;
  return _storage;
}
