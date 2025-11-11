import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
  glow?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, glow, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
            error &&
              "border-destructive focus-visible:ring-destructive focus-visible:border-destructive",
            success &&
              "border-green-500 focus-visible:ring-green-500 focus-visible:border-green-500",
            glow && "focus-visible:shadow-lg focus-visible:shadow-primary/20",
            !error &&
              !success &&
              "focus-visible:border-primary hover:border-primary/50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="h-5 w-5 text-destructive animate-scale-in"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
        {success && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="h-5 w-5 text-green-500 animate-scale-in"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

