export function deleteKey<T>(record: Record<string, T>, key: string): Record<string, T> {
    delete record[key];
    return record;
};