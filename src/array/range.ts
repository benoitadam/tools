import isNil from '../check/isNil';

/**
 * Returns an array of min to max item
 * @example range(3, 5) {
return [3, 4, 5]
  * @param min
  * @param max
  */
export default function range(min: number, max: number): number[];

/**
 * Returns an array of length item
 * @example range(3) {
return [0, 1, 2]
  * @param length
  */
export default function range(length: number): number[];

<<<<<<< HEAD
export default function range(min: number, max?: number | null) {
  if (!isNil(max)) return range(max - min + 1).map(i => i + min);
  return Array.from(Array(min).keys());
}
=======
const range = ((min: number, max?: number | null) => {
  if (!isNil(max)) return range(max - min + 1).map((i) => i + min);
  return Array.from(Array(min).keys());
}) as Range;

export default range;
>>>>>>> esbuild
