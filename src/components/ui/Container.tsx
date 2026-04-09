import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

const maxWidths = {
  default: "max-w-[1200px]",
  narrow: "max-w-[800px]",
  wide: "max-w-[1400px]",
};

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-10 lg:px-12", maxWidths[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
