import getJson from '../json/getJson';
import valueBy from '../record/valueBy';

export default function uniq<T>(arr: T[]): T[] {
    return Object.values(valueBy(arr, v => getJson(v)));
}