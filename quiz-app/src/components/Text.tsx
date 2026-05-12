import { cn } from "@/lib/utils";
import * as React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default 'p'
   */
  as?: keyof React.JSX.IntrinsicElements;
  type?: keyof React.JSX.IntrinsicElements;
}

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ as = "p", className, children, ...props }, ref) => {
    return React.createElement(
      as,
      {
        ...props,
        className: cn(
          "text-base",
          as === "h3" && "text-xl tracking-wide",
          as === "h2" && "text-2xl tracking-wider",
          className,
        ),
        ref,
      },
      children,
    );
  },
);
Text.displayName = "Text";

export default Text;
