import { cn } from "@/lib/utils";
import type { BoxProps } from "./Box";
import Box from "./Box";
import * as React from "react";

export interface VStackProps
  extends React.HTMLAttributes<HTMLDivElement>, BoxProps {}

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-col gap-4", className)}
        {...props}
      />
    );
  },
);

VStack.displayName = "VStack";
export default VStack;
