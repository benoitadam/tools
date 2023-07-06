export interface IStorage {
  getItem(key: string): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
}

const values: any = {};
let _storage: IStorage = globalThis.localStorage || {
  getItem: (key: string) => values[key] || null,
  removeItem: (key: string) => {
    delete values[key];
  },
  setItem: (key: string, value: string) => (values[key] = value),
};

export function getStorage() {
  return _storage;
};
