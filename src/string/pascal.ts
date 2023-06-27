import {firstUpper} from "./firstUpper";
import {words} from "./words";

export function pascal(arg: any): string;
export function pascal(arg: string): string {
    return words(arg).map(firstUpper).join('');
}
