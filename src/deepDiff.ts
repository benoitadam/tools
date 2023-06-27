import { isDate } from "./check";
import { isEmpty } from "./check/isEmpty";
import { isObject } from "./check/isObject";

function isEmptyObject(o: any): boolean {
	return isObject(o) && isEmpty(o);
}

export function deepDiff(lhs: any, rhs: any) {
	if (lhs === rhs) return {}; // equal return no diff

	if (!isObject(lhs) || !isObject(rhs)) return rhs; // return updated rhs

	const l: any = lhs;
	const r: any = rhs;

	const deletedValues = Object.keys(l).reduce((acc, key) => {
		if (!r.hasOwnProperty(key)) acc[key] = undefined;
		return acc;
	}, {} as any);

	if (isDate(l) || isDate(r)) {
		if (l.valueOf() == r.valueOf()) return {};
		return r;
	}

	return Object.keys(r).reduce((acc, key) => {
		if (!l.hasOwnProperty(key)) {
			acc[key] = r[key]; // return added r key
			return acc;
		}

		const difference = deepDiff(l[key], r[key]);

		// If the difference is empty, and the lhs is an empty object or the rhs is not an empty object
		if (isEmptyObject(difference) && !isDate(difference) && (isEmptyObject(l[key]) || !isEmptyObject(r[key])))
			return acc; // return no diff

		acc[key] = difference; // return updated key
		return acc; // return updated key
	}, deletedValues);
}