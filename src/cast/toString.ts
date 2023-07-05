import isNil from '../check/isNil';

export default function toString(v: any, def: string = ''): string {
    return isNil(v) ? def : String(v);
}