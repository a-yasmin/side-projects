import { cn } from "@/lib/utils";
import type { BoxProps } from "./Box";
import Box from "./Box";
import * as React from "react";

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>, BoxProps {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn("flex flex-row", className)} {...props} />
    );
  },
);

Stack.displayName = "Stack";
export default Stack;
