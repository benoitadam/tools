export default function isEmpty(value: string): value is '';
export default function isEmpty(value: any[]): value is [];
export default function isEmpty(value: any): value is {};
export default function isEmpty(value: any): boolean {
    return !value || (Array.isArray(value) ? value : Object.keys(value)).length === 0;
}