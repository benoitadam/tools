import { str, arr, obj, nbr, bool, err, date } from './cast';

describe('cast', () => {
  test(`str`, () => {
    expect(str(0)).toEqual('0');
    expect(str(5)).toEqual('5');
    expect(str(undefined, 'a')).toBe('a');
  });

  test(`arr`, () => {
    expect(arr(0)).toEqual([0]);
    expect(arr([5])).toEqual([5]);
    expect(arr({ a: 1 })).toEqual([{ a: 1 }]);
  });

  test(`obj`, () => {
    expect(obj(0)).toEqual({});
    expect(obj([5], 'b')).toEqual('b');
    expect(obj({ a: 1 })).toEqual({ a: 1 });
  });

  test(`nbr`, () => {
    expect(nbr(0, 'a')).toEqual(0);
    expect(nbr('', 'b')).toEqual('b');
    expect(nbr(undefined, 'c')).toEqual('c');
    expect(nbr('')).toEqual(undefined);
    expect(nbr(' ')).toEqual(undefined);
    expect(nbr(-5)).toEqual(-5);
    expect(nbr('-5')).toEqual(-5);
    expect(nbr('-7.3')).toEqual(-7.3);
    expect(nbr('-2,4')).toEqual(-2.4);
    expect(nbr('a2')).toEqual(2);
    expect(nbr('2a')).toEqual(2);
  });

  test(`bool`, () => {
    expect(bool(0)).toEqual(false);
    expect(bool(1)).toEqual(true);
    expect(bool('true')).toEqual(true);
    expect(bool('false')).toEqual(false);
    expect(bool(undefined, 'b')).toEqual('b');
  });

  test(`err`, () => {
    expect(err(new Error("test")).message).toEqual("test");
    expect(err("test").message).toEqual("test");
  });

  test(`date`, () => {
    const d0 = new Date(0);
    const now = new Date();
    const nowTime = now.getTime();
    expect(date(now, d0).getTime()).toEqual(nowTime);
    expect(date(nowTime, d0).getTime()).toEqual(nowTime);
  });
});


