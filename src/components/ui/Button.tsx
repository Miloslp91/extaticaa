"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-light transition-all duration-300 shadow-md hover:shadow-lg",
  secondary:
    "bg-transparent border border-text/30 text-text hover:bg-text/10 transition-all duration-300",
  ghost:
    "bg-transparent text-text hover:text-accent transition-colors duration-300",
};

const sizes: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm tracking-widest uppercase",
  lg: "px-8 py-4 text-base tracking-widest uppercase",
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium cursor-pointer rounded-full",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
