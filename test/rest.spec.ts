import { Rest } from '../src/rest';

describe('request', () => {
    test('constructor', () => {
        const r = new Rest({ baseUrl: 'test' })
        expect(r.baseOptions?.baseUrl).toEqual('test');
    });
});