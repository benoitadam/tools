export class TimeoutError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'TimeoutError';
    }
}

export function withTimeout<T>(promise: Promise<T>, timeout = 5000): Promise<T> {
	return Promise.race([
		promise,
		new Promise<T>((_, reject) => setTimeout(() => reject(new TimeoutError()), timeout)),
	]);
}