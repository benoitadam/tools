export class TimeoutError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'TimeoutError';
    }
}

export function withTimeout<T>(promise: Promise<T>, timeoutMs = 5000): Promise<T> {
    return new Promise((resolve, reject) => {
		const t = setTimeout(() => reject(new TimeoutError()), timeoutMs);
		promise.then(resolve).catch(reject).finally(() => clearTimeout(t));
	});
}