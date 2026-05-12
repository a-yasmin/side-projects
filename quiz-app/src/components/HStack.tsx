import { cn } from "@/lib/utils";
import type { BoxProps } from "./Box";
import Box from "./Box";
import * as React from "react";

export interface HStackProps
  extends React.HTMLAttributes<HTMLDivElement>, BoxProps {}

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-row gap-4", className)}
        {...props}
      />
    );
  },
);

HStack.displayName = "HStack";
export default HStack;
