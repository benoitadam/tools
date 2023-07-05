import { useEffect, useState } from 'react';
import Msg from '../msg/Msg';

export default function useMsg<T = any>(msg: Msg<T>): T;
export default function useMsg<T = any>(msg: Msg<T> | null | undefined): T | undefined;
export default function useMsg<T = any>(msg: Msg<T> | null | undefined): T | undefined {
    const setState = useState(0)[1];
    useEffect(() => msg?.on(() => setState((i) => i + 1)), [msg]);
    return msg ? msg.get() : undefined;
}