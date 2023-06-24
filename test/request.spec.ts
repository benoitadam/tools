import { Request } from '../request';

describe('request', () => {
    test('constructor', () => {
        const r = new Request({ baseUrl: 'test' })
        expect(r.baseOptions?.baseUrl).toEqual('test');
    });
});