import keys from '../record/keys';
import isArray from './isArray';

export default (value: any): boolean => !value || (isArray(value) ? value : keys(value)).length === 0;