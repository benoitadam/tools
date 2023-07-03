import { diff } from '../src/number';
import { sleep, retry, withTimeout } from '../src/promise';

describe('promise', () => {
  test(`sleep`, async () => {
    const t1 = Date.now();
    await sleep(50);
    expect(diff((Date.now() - t1), 50)).toBeLessThan(30);
    const t2 = Date.now();
    await sleep(100);
    expect(diff((Date.now() - t2), 100)).toBeLessThan(30);
  });
  
  test(`retry`, async () => {
    let i=0;
    const v = await retry(async () => { throw i++; }, 5).catch(() => 0);
    expect(v).toEqual(5);
  });

  test(`withTimeout`, async () => {
    const test1 = withTimeout(sleep(50).then(() => true), 100).catch(() => false);
    expect(test1).toEqual(true);
    const test2 = withTimeout(sleep(100).then(() => true), 50).catch(() => false);
    expect(test2).toEqual(false);
  });
});
