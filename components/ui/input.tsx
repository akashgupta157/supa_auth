import * as React from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  onEndIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startIcon: StartIcon,
      endIcon: EndIcon,
      onEndIconClick,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {StartIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <StartIcon className="h-4 w-4" />
          </div>
        )}

        <input
          ref={ref}
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            StartIcon && "pl-9",
            EndIcon && "pr-9",
            className
          )}
          {...props}
        />

        {EndIcon && (
          <button
            type="button"
            onClick={onEndIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            tabIndex={-1}
          >
            <EndIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
