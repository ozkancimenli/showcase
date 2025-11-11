import * as React from "react";
import { Label } from "./label";
import { cn } from "../../lib/utils";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => {
    return (
      <form ref={ref} className={cn("space-y-4", className)} {...props} />
    );
  }
);
Form.displayName = "Form";

export interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, required, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <Label>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        {children}
        {error && (
          <p className="text-sm text-destructive font-medium">{error}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col sm:flex-row gap-4", className)}
        {...props}
      />
    );
  }
);
FormGroup.displayName = "FormGroup";

export { Form, FormField, FormGroup };

