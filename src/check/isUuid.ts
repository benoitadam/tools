export function isUuid(str: string) {
    const code = str.replace(/[a-zA-Z0-9]+/g, a => ''+a.length);
    return code === '8-4-4-4-12' || code === '32';
}