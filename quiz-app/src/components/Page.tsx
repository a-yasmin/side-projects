import React, { type FC, type PropsWithChildren, type ReactNode } from "react";
import type { BoxProps } from "./ui/Box";
import Box from "./ui/Box";
import { cn } from "@/lib/utils";

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
            "flex flex-col items-center w-screen min-h-screen px-20",
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
