export function clean(arg: string): string {
  return arg
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w]/g, ' ')
    .trim();
}
