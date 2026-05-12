import { type FC, type PropsWithChildren, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { BoxProps } from "./Box";
import Box from "./Box";

export type PageProps = {
  header?: ReactNode;
  footer?: ReactNode;
} & BoxProps;

const Page: FC<PropsWithChildren<PageProps>> = ({
  children,
  header,
  footer,
  ...props
}) => {
  return (
    <>
      <Box {...props}>
        {/* header */}
        <main
          className={cn(
            "flex flex-col items-center justify-center w-screen min-h-screen",
          )}
        >
          {children}
        </main>
        {/* footer */}
      </Box>
    </>
  );
  //   return <div className="px-20 items-center justify-center"></div>;
};

export default Page;
