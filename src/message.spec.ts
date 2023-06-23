import message, { Message } from './message';

describe('Message', () => {
  test(`Message next and subscribe`, () => {
    const message = new Message(0);
    expect(message.get()).toEqual(0);

    let a = -1;
    let b = -1;

    const unsubscribeA = message.on((val) => (a = val));

    const unsubscribeB = message.on((val) => (b = val));

    message.set(1);
    expect(message.get()).toEqual(1);
    expect(a).toEqual(1);
    expect(b).toEqual(1);

    unsubscribeA();
    message.set(2);
    expect(message.get()).toEqual(2);
    expect(a).toEqual(1);
    expect(b).toEqual(2);

    unsubscribeB();
    message.set(3);
    expect(message.get()).toEqual(3);
    expect(a).toEqual(1);
    expect(b).toEqual(2);
  });

  test(`Message toPromise`, async () => {
    const message = new Message(0);

    let a = 1;
    message.toPromise((val) => val === 3).then((val) => (a = val));

    expect(a).toEqual(1);

    message.set(2);
    expect(a).toEqual(1);

    message.set(3);
    console.debug('messagePromise a', a);
    const b = await message.toPromise();
    expect(a).toEqual(3);
    expect(b).toEqual(3);
  });

  test(`Message map`, async () => {
    const message = new Message(0);
    const map = message.map(v => v + 1);
    let v = map.get();

    map.on(next => v = next);

    expect(map.get()).toEqual(1);
    expect(v).toEqual(1);

    message.set(50);
    expect(map.get()).toEqual(51);
    expect(v).toEqual(51);
  });

  test(`Message getter setter`, () => {
    const message = new Message(0);
    const getVal = message.get.bind(message);
    const setVal = message.set.bind(message);

    setVal(1);
    expect(getVal()).toEqual(1);

    setVal.call(this, 2);
    expect(getVal.call(this)).toEqual(2);
  });

  test('message', () => {
    expect(message(null, 1)).not.toEqual(message(null, 2));
    expect(message('a', 1)).toEqual(message('a', 2));
  });
});
