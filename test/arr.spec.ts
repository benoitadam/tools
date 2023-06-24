import { remove, move, last } from '../arr';

describe('array', () => {
  test(`remove`, () => {
    const items: any[] = [0, 1, 2, 3];
    expect(remove(items, 3)).toEqual([0, 1, 2]);
    expect(remove(items, 2)).toEqual([0, 1]);
    expect(remove(items, 0)).toEqual([1]);
    const a = {};
    items.push(2, 3, a);
    expect(remove(items, a)).toEqual([1, 2, 3]);
  });

  test(`move`, () => {
    const items: any[] = [0, 1, 2, 3];
    expect(move(items, 3, -1)).toEqual([0, 1, 3, 2]);
    expect(move(items, 3, +1)).toEqual([0, 1, 2, 3]);
    expect(move(items, 0, +2)).toEqual([1, 2, 0, 3]);
    expect(move(items, 0, -2)).toEqual([0, 1, 2, 3]);
    const a = {};
    items.push(a);
    expect(move(items, a, -1)).toEqual([0, 1, 2, a, 3]);
    expect(move(items, a, -1)).toEqual([0, 1, a, 2, 3]);
    expect(move(items, a, +1)).toEqual([0, 1, 2, a, 3]);
    expect(move(items, a, +1)).toEqual([0, 1, 2, 3, a]);
    expect(move(items, a, +1)).toEqual([a, 0, 1, 2, 3]);
    expect(move(items, a, +1)).toEqual([0, a, 1, 2, 3]);
    expect(move(items, a, +5)).toEqual([0, a, 1, 2, 3]);
    expect(move(items, a, +20)).toEqual([0, a, 1, 2, 3]);
    expect(move(items, a, -20)).toEqual([0, a, 1, 2, 3]);
    expect(move(items, a, +4)).toEqual([a, 0, 1, 2, 3]);
  });
  
  test(`last`, async () => {
    expect(last([0, 1, 2])).toEqual(2);
  }, 10);
});


