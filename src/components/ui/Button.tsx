import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "filled" | "outline";
}

const baseClasses =
  "flex cursor-pointer items-center justify-center border-2 font-medium text-sm md:text-xl z-10 gap-2 px-6 py-3 md:px-10 md:py-5 w-fit rounded-2xl md:rounded-3xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 hover:scale-105 md:hover:scale-110";

const variantClasses = {
  filled:
    "bg-primary border-border text-background hover:shadow-[0_8px_20px_-4px_var(--color-accent-blue)]",
  outline:
    "border border-border text-foreground bg-transparent hover:shadow-[0_8px_20px_-4px_var(--color-accent-red)]",
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
