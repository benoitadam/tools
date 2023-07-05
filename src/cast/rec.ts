import toRecord from "./toRecord";

export default function rec<T = any>(v: T | null | undefined) {
  return toRecord<T>(v);
}