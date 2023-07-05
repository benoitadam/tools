export default function isRecord(value: any): value is Record<any, any> {
    return value instanceof Object && !Array.isArray(value);
}