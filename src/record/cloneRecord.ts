export type Writable<T> = { -readonly [P in keyof T]: T[P] };

export function cloneRecord<T extends {}>(value: T | null | undefined): Writable<T> {
  return Object.assign({}, value);
}
