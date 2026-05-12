import * as React from "react";

import { cn } from "@/lib/utils";
import type { FieldWrapperBaseProps } from "./FieldWrapper";
import FieldWrapper from "./FieldWrapper";

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix">,
    FieldWrapperBaseProps {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  inputClassName?: string;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  isDisabled?: boolean;
}

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    // for wrapper
    wrapperProps,
    htmlFor,
    label,
    helperText,
    showRequired,
    showOptional,
    outerPrefix,
    outerSuffix,
    error,
    // for input container
    className,
    // for input
    prefix,
    suffix,
    inputClassName,
    inputRef,
    isDisabled,
    ...inputProps
  } = props;

  return (
    <FieldWrapper
      htmlFor={htmlFor}
      label={label}
      helperText={helperText}
      showOptional={showOptional}
      showRequired={showRequired}
      {...wrapperProps}
    >
      <input
        ref={inputRef}
        disabled={isDisabled}
        className={cn(
          "h-7 w-full min-w-0 rounded-md border border-input bg-input/20 px-2 py-0.5 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          inputClassName,
        )}
        {...inputProps}
      />
    </FieldWrapper>
  );
});

Input.displayName = "Input";

export default Input;
