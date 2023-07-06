import { useRef } from "react";

export default __NODE_JS__ ? undefined : <T>(fn: () => T): T => {
  const ref: any = useRef();
  return (ref.current || (ref.current = { v: fn() })).v;
};