import { Req } from '../req';

describe('request', () => {
    test('constructor', () => {
        const r = new Req({ baseUrl: 'test' })
        expect(r.baseOptions?.baseUrl).toEqual('test');
    });
});