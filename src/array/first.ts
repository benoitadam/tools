/**
 * Returns the first element of an array.
 * @example first([3, 4, 5]) === 3
 * @param items
 * @returns
 */
export default function first<T>(items: T[]) {
    return items[0];
};