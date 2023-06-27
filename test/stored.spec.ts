import { getStored, setStored } from '../src/stored';

describe('stored', () => {

  test(`test1`, () => {
    setStored('test1', 'abc');
    expect(getStored('test1')).toEqual('abc');
  });
});


