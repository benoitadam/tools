import { parseJson, getJson, clone } from '../json';

describe('json', () => {
  test(`parseJson`, () => {
    expect(parseJson('"abcd"')).toEqual('abcd');
    expect(parseJson('{"a":1}')).toEqual({ a: 1 });
    expect(parseJson('{"a1')).toEqual(undefined);
    expect(parseJson('{"a1', 'error')).toEqual('error');
  });

  test(`getJson`, () => {
    expect(getJson('abcd')).toEqual('"abcd"');
    expect(getJson({ a: 1 })).toEqual('{"a":1}');
    var a: any = {};
    a.a = a;
    expect(getJson(a)).toEqual(undefined);
    expect(getJson(a, 'error')).toEqual('error');
  });
  
  test(`clone`, () => {
    const a = { n: 1 };
    expect(clone("abcd")).toEqual("abcd");
    expect(clone(a, { n: 2 }).n).toEqual(a.n);
    const b = clone(a);
    b.n = 2;
    expect(b).not.toEqual(a);
  });
});


