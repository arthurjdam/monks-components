import * as React from "react";
import clsx from "clsx";

export interface Props {
  className?: ReadonlyArray<string> | string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  size?:
    | "display-l"
    | "display-m"
    | "display-s"
    | "body-m"
    | "body-l"
    | "body-label";
  variant?: "extended" | "sans-serif" | "serif" | "sans-serif-medium";
  copy: React.ReactNode | string;
  outlineShowDelay?: number;
  ariaLabel?: string;
  displayOriginalCopy?: boolean;
}

const A1Heading = React.forwardRef<HTMLHeadingElement | HTMLSpanElement, Props>(
  (
    {
      className,
      as: Tag = "h1",
      size = "display-l",
      variant = "sans-serif",
      copy,
      outlineShowDelay = 0,
      ariaLabel,
      displayOriginalCopy = false,
    },
    ref
  ) => (
    <Tag
      //@ts-ignore [ts]
      ref={ref}
      className={clsx(
        "mx-0 em:not-italic font-normal",
        size === "display-l" && [
          "text-2xl",
          variant === "sans-serif" && "tracking-tighter",
          variant === "serif" && "em:tracking-tighter",
        ],
        size === "display-m" && [
          "text-xl",
          variant === "sans-serif" && "tracking-tight",
          variant === "serif" && "em:tracking-tight",
        ],
        size === "display-s" && [
          "text-lg",
          variant === "sans-serif" && "tracking-tight",
          variant === "serif" && "em:tracking-tight",
        ],
        variant === "serif" && "font-serif em:font-sans",
        variant === "sans-serif" && "font-sans em:font-serif",
        variant === "extended" && "font-extended em:font-sans",
        variant === "sans-serif-medium" && "font-sans em:font-serif",
        className
      )}
      aria-label={ariaLabel}
      children={copy || ""}
    />
  )
);

export default A1Heading;
