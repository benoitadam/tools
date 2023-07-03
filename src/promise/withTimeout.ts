import TimeoutError from "./TimeoutError";

export default <T>(promise: Promise<T>, timeoutMs = 5000): Promise<T> => {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new TimeoutError()), timeoutMs);
    promise
      .then(resolve, reject)
      .finally(() => clearTimeout(t));
  });
}