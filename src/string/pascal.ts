import firstUpper from './firstUpper';
import words from './words';

export default function pascal(str: any): string {
    return words(str).map(firstUpper).join('');
}