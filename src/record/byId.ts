export function byId<T extends { id: string }>(itemsOrRecord: T[] | Record<string, T>): Record<string, T> {
    const items = Array.isArray(itemsOrRecord) ? itemsOrRecord : Object.values(itemsOrRecord);
    return Object.fromEntries(items.map((item) => [item.id || '', item]));
};