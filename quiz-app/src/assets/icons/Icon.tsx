import type { FC, ReactNode, SVGProps } from "react";

type Props = {
  element?: ReactNode;
  viewBox: string;
  size?: string | number;
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, "viewBox">;

export type IconProps<T> = {
  variant?: keyof T;
  viewBox?: Props["viewBox"];
} & Omit<Props, "viewBox">;

const Icon: FC<Props> = ({
  size = "24px",
  element,
  viewBox,
  fill,
  color,
  width,
  height,
  title,
  ...props
}) => (
  <svg
    viewBox={viewBox}
    style={{
      color: fill || color,
      fill: fill || "currentColor",
      width: width || size,
      height: height || size,
    }}
    fill={fill || "currentColor"}
    {...props}
  >
    <title>{title || (element ? "Icon" : "No Icon")}</title>

    {element}
  </svg>
);

export { Icon };
