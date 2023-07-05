import firstLower from './firstLower';
import pascal from './pascal';

export default function camel(arg: string): string {
    return firstLower(pascal(arg));
}
