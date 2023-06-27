import { clone, cloneFlat } from '../src';

describe('json', () => {
  test(`clone`, () => {
    const a = { n: 1 };
    expect(clone("abcd")).toEqual("abcd");
    expect(clone(a, { n: 2 }).n).toEqual(a.n);
    const b = clone(a);
    b.n = 2;
    expect(b).not.toEqual(a);
  });
});


