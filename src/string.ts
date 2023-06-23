import { str } from "./cast";

export function firstUpper(value: any): string;
export function firstUpper(value: string): string {
    value = str(value);
    return value ? value[0].toUpperCase() + value.substring(1) : value;
}

export function firstLower(value: any): string;
export function firstLower(value: string): string {
    value = str(value);
    return value ? value[0].toLowerCase() + value.substring(1) : value;
}

export function clean(value: any): string;
export function clean(value: string): string {
    return str(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w]/g, ' ').trim();
}

export function words(value: any): string[];
export function words(value: string): string[] {
    return clean(value).replace(/[a-z0-9][A-Z]/g, (s) => s[0] + ' ' + s[1].toLowerCase()).toLowerCase().trim().split(' ').filter(s => s);
}

export function pascal(value: any): string;
export function pascal(value: string): string {
    return words(value).map(firstUpper).join('');
}

export function camel(value: any): string;
export function camel(value: string): string {
    return firstLower(pascal(value));
}