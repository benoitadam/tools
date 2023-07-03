import { RecordWritable } from "./RecordWritable";

export default <T extends {}>(value: T | null | undefined): RecordWritable<T> => Object.assign({}, value);
