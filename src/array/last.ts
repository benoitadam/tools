/**
 * Returns the last item in the array.
 * @example last([3, 4, 5]) => 5
 * @param items 
 * @returns
 */
export function last<T>(items: T[]) {
    return items[items.length - 1];
}