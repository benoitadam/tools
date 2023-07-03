import { Rest } from '../src/rest';

describe('request', () => {
    test('constructor', () => {
        const r = new Rest({ baseUrl: 'test' })
        expect(r.options?.baseUrl).toEqual('test');
    });
});