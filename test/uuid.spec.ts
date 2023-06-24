import uuid, { isUuid, _uuid } from '../uuid';

describe('uuid', () => {
  const testUuid = (id: string, value: boolean) =>
    test(`isUuid(${id}) === ${value}`, () => expect(isUuid(id)).toBe(value));

  testUuid('00000000-0000-0000-0000-000000000000', true);
  testUuid('ffffffff-ffff-ffff-ffff-ffffffffffff', true);
  testUuid('7ae77ebe-16c8-458b-8a44-4396dbe7f6f4', true);
  testUuid('7AE77EBE-16C8-458B-8A44-4396DBE7F6F4', true);
  testUuid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', false);
  testUuid('7ae77ebea16c8-458b-8a44-4396dbe7f6f4', false);
  testUuid('7ae77ebea16c8458b8a444396dbe7f6f4', false);

  for (let i = 0; i < 10; i++) {
    const id = uuid();
    test(`uuid ${id}`, () => expect(isUuid(id)).toBeTruthy());
  }

  const crypto = require('crypto');

  const uuid1 = _uuid({ randomUUID: crypto.randomUUID });
  for (let i = 0; i < 2; i++) {
    const id1 = uuid1();
    test(`uuid1 ${id1}`, () => expect(isUuid(id1)).toBeTruthy());
  }

  const uuid2 = _uuid({ getRandomValues: crypto.getRandomValues });
  for (let i = 0; i < 2; i++) {
    const id2 = uuid2();
    test(`uuid2 ${id2}`, () => expect(isUuid(id2)).toBeTruthy());
  }

  const uuid3 = _uuid({});
  for (let i = 0; i < 2; i++) {
    const id3 = uuid3();
    test(`uuid3 ${id3}`, () => expect(isUuid(id3)).toBeTruthy());
  }
});
