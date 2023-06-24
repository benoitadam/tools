import { setStorage, getStored, setStored } from '../stored';

describe('stored', () => {
  const values: any = {};

  setStorage({
    getItem: (key: string) => values[key] || null,
    removeItem: (key: string) => { delete values[key]; },
    setItem: (key: string, value: string) => values[key] = value,
  })

  test(`test1`, () => {
    setStored('test1', 'abc');
    expect(getStored('test1')).toEqual('abc');
  });
});


