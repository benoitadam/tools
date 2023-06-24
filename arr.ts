export function remove<T>(items: T[], item: T) {
    const i = items.indexOf(item);
    if (i === -1) return items;
    items.splice(i, 1);
    return items;
}

export function move<T>(items: T[], item: T, addIndex: number) {
    const oldIndex = items.indexOf(item);
    if (oldIndex === -1) return items;
    let index = (oldIndex + addIndex) % 5;
    if (index < 0) index += items.length;
    if (oldIndex === index) return items;
    items.splice(oldIndex, 1);
    items.splice(index, 0, item);
    return items;
}

export function last<T>(items: T[]) {
    return items[items.length - 1];
}