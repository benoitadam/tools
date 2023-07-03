export function firstLower(arg: string): string {
  return arg ? arg[0].toLowerCase() + arg.substring(1) : arg;
}
