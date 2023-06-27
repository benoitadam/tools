import { byId, byProp } from '../src/record';

describe('record', () => {
  test(`byId`, () => {
    const a = { id: 'ka', p: 'pa' };
    const b = { id: 'kb', p: 'pb' };
    const c = { id: 'kc', p: 'pc' };
    expect(byId([a, b, c])).toEqual({ ka: a, kb: b, kc: c });
  });

  test(`byProp`, () => {
    const a = { id: 'ka', p: 'pa' };
    const b = { id: 'kb', p: 'pb' };
    const c = { id: 'kc', p: 'pc' };
    expect(byProp([a, b, c], i => i.p)).toEqual({ pa: a, pb: b, pc: c });
  });
});