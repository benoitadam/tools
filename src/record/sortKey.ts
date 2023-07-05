export default function sortKey<T extends Record<any, any>>(record: T): T {
    return Object.fromEntries(Object.entries(record).sort((a, b) => a[0].localeCompare(b[0]))) as T;
}