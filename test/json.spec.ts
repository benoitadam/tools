import { parseJson, getJson } from '../src/json';

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
});


