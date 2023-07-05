import Rest from './Rest';

export * from './types';

export { default as Rest } from './Rest';
export { default as RestError } from './RestError';

export const rest = new Rest();
