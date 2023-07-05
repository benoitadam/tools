/**
 * Creates an array with all falsy values removed.
 * @param items
 * @returns
 */
export default function compact<T>(value: T[]) {
    return value.filter(Boolean) as NonNullable<T>[];
};