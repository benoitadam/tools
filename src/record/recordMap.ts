// export function recordMap<T, U>(record: Record<string, T>, key: (item: T, key: string) => string): Record<string, U>;
// export function recordMap<T, U>(record: Record<string, T>, key: null, item: (item: T, key: string) => U): Record<string, U>;
// export function recordMap<T, U>(record: Record<string, T>, key: (item: T, key: string) => string, item: (item: T, key: string) => U): Record<string, U>;
// export function recordMap<T, U>(record: Record<string, T>, key?: null|((item: T, key: string) => string), item?: null|((item: T, key: string) => U)): Record<string, U> {
//     const gKey: (item: T, key: string) => string = key ? key : (_, key) => key;
//     const gItem: (item: T, key: string) => U = item ? item : (item) => item as unknown as U;
//     return Object.fromEntries(Object.entries(record).map(
//         ([key, item]) => [gKey(item, key), gItem(item, key)]
//     ));
// };



type GK<T> = keyof T | ((item: T) => string);

export function recordMap<T>(items: T[], key: GK<T>): Record<string, T>;
export function recordMap<T, U extends keyof T>(items: T[], key: GK<T>, val: U): Record<string, T[U]>;
export function recordMap<T, V>(items: T[], key: GK<T>, val: (item: T) => V): Record<string, V>;
export function recordMap<T>(items: T[], key: GK<T>, val?: any): Record<string, any> {
	const r: Record<string, any> = {};
	const gK = typeof key === 'function' ? key : (i: any) => String(i[key]);
	const gV = typeof val === 'function' ? val : val ? (i: any) => i[val] : (i: any) => i;
	for (const item of items) r[gK(item)] = gV(item);
	return r;
}
