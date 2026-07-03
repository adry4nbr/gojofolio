import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "filled" | "outline";
}

const baseClasses =
  "flex cursor-pointer items-center justify-center font-medium text-sm gap-2 px-6 py-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses = {
  filled:
    "bg-primary text-background hover:shadow-[0_8px_20px_-4px_var(--color-accent)]",
  outline:
    "border border-border text-foreground bg-transparent hover:shadow-[0_8px_20px_-4px_var(--color-ring)]",
};

export function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={[baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
