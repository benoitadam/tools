type GK<T> = keyof T | ((item: T) => string);

export function groupBy<T>(items: T[], key: GK<T>): Record<string, T[]>;
export function groupBy<T, U extends keyof T>(items: T[], key: GK<T>, val: U): Record<string, T[U][]>;
export function groupBy<T, V>(items: T[], key: GK<T>, val: (item: T) => V): Record<string, V[]>;
export function groupBy<T>(items: T[], key: GK<T>, val?: any): Record<string, any[]> {
	const r: Record<string, any[]> = {};
	const gK = typeof key === 'function' ? key : (i: T) => String(i[key]);
	const gV = typeof val === 'function' ? val : val ? (i: T) => (i as any)[val] : (i: T) => i;
	for (const item of items) {
		const k = gK(item);
		(r[k] || (r[k] = [])).push(gV(item));
	}
	return r;
}