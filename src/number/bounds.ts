export function bounds(val: number, min?: number, max?: number): number {
  if (min !== undefined && val < min) val = min;
  if (max !== undefined && val > max) val = max;
  return val;
}
