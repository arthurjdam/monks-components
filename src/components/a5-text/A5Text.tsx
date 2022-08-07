import * as React from "react";
import clsx from "clsx";

export interface Props {
  copy: string;
  as?: "p" | "span" | "li" | "legend";
  size?: "body-l" | "body-m" | "body-label";
  variant?: "sans-serif" | "sans-serif-medium" | "serif" | "caveat";
  className?: string | Array<string>;
  allowOutlines?: boolean;
  ariaLabel?: string;
}

const A5Text = React.forwardRef<
  HTMLParagraphElement | HTMLSpanElement | HTMLLIElement | HTMLLegendElement,
  Props
>(
  (
    {
      copy,
      as: Tag = "p",
      size = "body-l",
      variant = "sans-serif",
      className,
      allowOutlines = false,
      ariaLabel,
    },
    ref
  ) => (
    <Tag
      //@ts-ignore [ts]
      ref={ref}
      className={clsx(
        "my-0",
        size === "body-l" && [
          "text-xl",
          (variant === "sans-serif" || variant === "sans-serif-medium") &&
            "tracking-tight",
        ],
        size === "body-m" && [
          "text-lg",
          (variant === "sans-serif" || variant === "sans-serif-medium") &&
            "tracking-tight",
        ],
        size === "body-label" && "text-base",
        variant === "sans-serif" && "font-sans",
        variant === "sans-serif-medium" && "font-sans font-medium",
        variant === "serif" && "font-serif",
        // variant === 'caveat' && '',
        allowOutlines && "p-2 relative no-underline",
        className
      )}
      aria-label={ariaLabel}
      children={copy || ""}
    />
  )
);
// A5Text.displayName = "a5-text";

export default A5Text;
