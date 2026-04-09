import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  headline,
  subheadline,
  align = "center",
  dark = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-20 md:mb-28",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl md:text-[2.75rem] lg:text-[3.25rem] leading-tight",
          dark ? "text-text" : "text-bg"
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-[50ch]",
            align === "center" && "mx-auto",
            dark ? "text-text-muted" : "text-bg/60"
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
