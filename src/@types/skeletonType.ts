import { ElementType, ReactChild, ReactFragment, ReactPortal } from "react";

interface skeletonType {
  width?:  string|number;
  class?: string;
  style?:object;
  sx?:object;
  component?: ElementType;
  children?:boolean | ReactChild | ReactFragment | ReactPortal | null & Node | undefined;
  animation?: "pulse" | "wave" | string |undefined;
  height?: number | string;
  variant?: "circular" | "rectangular" | "text" | string ;
}

export default skeletonType