/**
 * Returns an array of min to max item
 * @example range(3, 5) => [3, 4, 5]
 * @param min 
 * @param max 
 */
export function range(min: number, max: number): number[];

/**
 * Returns an array of length item
 * @example range(3) => [0, 1, 2]
 * @param length 
 */
export function range(length: number): number[];

export function range(min: number, max?: number) {
    if (max !== undefined) return range(max-min+1).map(i => i + min);
    return Array.from(Array(min).keys())
}