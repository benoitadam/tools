import toArray from "./toArray";

export default function arr<T = any>(v: T[] | T | null | undefined) {
    return toArray(v);
}