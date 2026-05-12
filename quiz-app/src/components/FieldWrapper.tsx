import { cn } from "@/lib/utils";
import * as React from "react";

export interface FieldWrapperBaseProps {
  htmlFor: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  showRequired?: boolean;
  showOptional?: boolean | string;
  outerPrefix?: React.ReactNode;
  outerSuffix?: React.ReactNode;
  error?: React.ReactNode;
}

export interface FieldWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>, FieldWrapperBaseProps {}

const FieldWrapper = React.forwardRef<HTMLDivElement, FieldWrapperProps>(
  (
    {
      children,
      htmlFor,
      label,
      helperText,
      showRequired,
      showOptional,
      outerPrefix,
      outerSuffix,
      error,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2 w-full", className)}
        {...props}
      >
        {label && (
          <label
            htmlFor={htmlFor}
            className="inline-flex items-center gap-x-0 text-sm leading-none cursor-text"
          >
            {typeof label === "string" ? (
              <span className="text-primary3 tracking-normal capitalize">
                {label}
              </span>
            ) : (
              label
            )}
            {showRequired && !!label && <span className="text-alert4">*</span>}
            {showOptional ? (
              typeof showOptional === "string" ? (
                <span className="text-xs text-primary2 pl-2 uppercase">
                  {showOptional}
                </span>
              ) : (
                <span className="text-xs text-primary2 pl-2 uppercase">
                  (optional)
                </span>
              )
            ) : null}
          </label>
        )}
        <div className="flex items-center gap-2">
          {outerPrefix}
          {children}
          {outerSuffix}
        </div>
        {!!error && (
          <p className="text-alert4 text-sm tracking-normal leading-none pl-3">
            ⚠ {error}
          </p>
        )}
        {!!helperText && <p className="text-xs leading-none">{helperText}</p>}
      </div>
    );
  },
);
FieldWrapper.displayName = "FieldWrapper";

export default FieldWrapper;
