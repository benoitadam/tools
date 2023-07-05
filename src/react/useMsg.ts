import { useEffect, useState } from 'react';
import { IMsgGetAndOn } from '../msg/types';

export default function useMsg<T>(msg: IMsgGetAndOn<T>): T;
export default function useMsg<T>(msg: IMsgGetAndOn<T> | null | undefined): T | undefined;
export default function useMsg<T>(msg: IMsgGetAndOn<T> | null | undefined): T | undefined {
    const setState = useState(0)[1];
    useEffect(() => msg?.on(() => setState((i) => i + 1)), [msg]);
    return msg ? msg.get() : undefined;
}