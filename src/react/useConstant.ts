import { useRef } from 'react';

type ResultBox<T> = { v: T };

export default <T>(fn: () => T): T => {
	const ref = useRef<ResultBox<T>>();

	if (!ref.current) {
		ref.current = { v: fn() };
	}

	return ref.current.v;
}
