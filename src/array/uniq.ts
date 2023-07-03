import getJson from '../json/getJson';
import valueBy from '../record/valueBy';
import values from '../record/values';

export default <T>(arr: T[]): T[] => values(valueBy(arr, (v) => getJson(v)));