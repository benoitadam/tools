import { getStored, setStored } from '../src/stored';

describe('stored', () => {
  test(`store string`, () => {
    setStored('test1', 'abc');
    expect(getStored('test1')).toEqual('abc');
  });
  
  test(`store object`, () => {
    setStored('test2', { a: 1 });
    expect(getStored('test2')).toEqual({ a: 1 });
  });
});


