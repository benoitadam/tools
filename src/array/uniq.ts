import { byProp } from "../record/valueBy";

export function uniq(arr: string[]): string[] {
    Object.values(byProp(arr.map((v) => [v])))
}