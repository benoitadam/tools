const regExp = /^[0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12}$/;

export function isUuid(str: string) {
    return regExp.test(String(str).toLowerCase());
}