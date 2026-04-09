import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

const maxWidths = {
  default: "max-w-[1000px]",
  narrow: "max-w-[700px]",
  wide: "max-w-[1200px]",
};

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full", maxWidths[size], className)}
      style={{ paddingLeft: "clamp(2rem, 5vw, 4rem)", paddingRight: "clamp(2rem, 5vw, 4rem)" }}
      {...props}
    >
      {children}
    </div>
  );
}
