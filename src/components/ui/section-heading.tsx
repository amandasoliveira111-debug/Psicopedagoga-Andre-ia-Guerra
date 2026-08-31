import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-block rounded-full px-4 py-1.5 text-sm font-semibold",
              invert
                ? "bg-white/15 text-white backdrop-blur-sm"
                : "bg-brand-pink-100 text-brand-pink-600"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl",
            invert ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-balance text-base leading-relaxed sm:text-lg",
              invert ? "text-white/85" : "text-ink-soft"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
