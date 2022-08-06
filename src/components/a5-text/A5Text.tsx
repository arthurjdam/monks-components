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

const A5Text: React.FC<Props> = ({
  copy,
  as = "p",
  size = "body-l",
  variant = "sans-serif",
  className,
  allowOutlines = false,
  ariaLabel,
}) => {
  const As = as;
  return (
    <As
      className={clsx(
        className,
        "my-0",
        size === "body-l"
          ? [
              "",
              (variant === "sans-serif" || variant === "sans-serif-medium") &&
                "tracking-[.01em]",
            ]
          : size === "body-m"
          ? [
              "",
              (variant === "sans-serif" || variant === "sans-serif-medium") &&
                "tracking-[.01em]",
            ]
          : size === "body-label"
          ? ""
          : null,
        variant === "sans-serif"
          ? ""
          : variant === "sans-serif-medium"
          ? ""
          : variant === "serif"
          ? ""
          : variant === "caveat"
          ? ""
          : null,
        allowOutlines && ["p-2", "relative", "no-underline"]
      )}
      aria-label={ariaLabel}
    >
      {copy || ""}
    </As>
  );
};
// A5Text.displayName = "a5-text";

export default A5Text;
