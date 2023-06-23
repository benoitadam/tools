export function byId<T extends { id: string }>(itemsOrRecord: T[] | Record<string, T>): Record<string, T> {
    const items = Array.isArray(itemsOrRecord) ? itemsOrRecord : Object.values(itemsOrRecord);
    return Object.fromEntries(items.map((item) => [item.id || '', item]));
};

export function byProp<T>(itemsOrMap: T[] | Record<string, T>, getProp: (item: T) => string): Record<string, T> {
    const items = Array.isArray(itemsOrMap) ? itemsOrMap : Object.values(itemsOrMap);
    return Object.fromEntries(items.map((item) => [getProp(item), item]));
};

export function map<T, U>(record: Record<string, T>, map: (item: T, key: string) => U): Record<string, U> {
    return Object.fromEntries(Object.entries(record).map(([key, item]) => [key, map(item, key)]));
};