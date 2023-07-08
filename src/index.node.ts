// NODE_JS

import NodeLocalStorage from './stored/NodeLocalStorage';
import { XMLHttpRequest } from 'xmlhttprequest';
import { webcrypto } from 'node:crypto';

globalThis.localStorage = new NodeLocalStorage();
globalThis.XMLHttpRequest = XMLHttpRequest;
globalThis.crypto = webcrypto as Crypto;

export * from './array';
export * from './cast';
export * from './check';
export * from './clipboard';
export * from './json';
export * from './msg';
export * from './number';
export * from './promise';
export * from './record';
export * from './rest';
export * from './stored';
export * from './string';

// NO REACT