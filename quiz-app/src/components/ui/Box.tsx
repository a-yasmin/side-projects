import * as React from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default 'div'
   */
  as?: "input" | React.HTMLElementType | React.SVGElementType;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ as = "div", children, ...props }, ref) => {
    return React.createElement(as, { ...props, ref }, children);
  },
);
Box.displayName = "Box";

export default Box;
