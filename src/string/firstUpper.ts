export function firstUpper(arg: string): string {
    return arg ? arg[0].toUpperCase() + arg.substring(1) : arg;
}