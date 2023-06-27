export function byProp<T>(itemsOrMap: T[] | Record<string, T>, getProp: (item: T) => string): Record<string, T> {
    const items = Array.isArray(itemsOrMap) ? itemsOrMap : Object.values(itemsOrMap);
    return Object.fromEntries(items.map((item) => [getProp(item), item]));
};