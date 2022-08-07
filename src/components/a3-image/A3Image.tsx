import * as React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  enableLazyLoading?: boolean;
  enableTransitionIn?: boolean;
  enableFadeIn?: boolean;
  fillAbsolute?: boolean;
  objectFit?: "cover" | "contain" | "scale-down" | "none";
  sources?: Array<{
    media?: string;
    type?: string;
    srcset: string;
  }>;
  width?: number;
  height?: number;
  useIntrinsicSize?: boolean;
  borderRadius?: boolean;
  className?: string;
}

// https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/
const getPlaceholderSource = (width: number, height: number) =>
  `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

const A3Image = React.forwardRef<HTMLImageElement, Props>(
  (
    {
      src,
      alt,
      enableLazyLoading = true,
      enableTransitionIn,
      enableFadeIn,
      fillAbsolute = false,
      objectFit,
      sources,
      width,
      height,
      useIntrinsicSize = false,
      borderRadius,
      className,
    },
    ref
  ) => (
    <picture
      ref={ref}
      className={clsx(
        borderRadius && "overflow-hidden rounded-lg",
        objectFit && "h-full relative",
        fillAbsolute && "absolute inset-0",
        enableTransitionIn && "overflow-hidden",
        "block",
        className
      )}
    >
      {sources?.map(({ media, type, srcset }) => (
        <source
          media={media}
          type={type}
          srcSet={srcset}
          key={String(srcset)}
        />
      ))}
      {/* {enableLazyLoading && useIntrinsicSize && ( */}
      <motion.img
        // src={getPlaceholderSource(width!, height!)}
        src={src}
        alt={alt}
        loading={enableLazyLoading ? "lazy" : undefined}
        className={clsx(
          "w-full block",
          objectFit && "h-full relative",
          objectFit === "cover" && "object-cover",
          objectFit === "contain" && "object-contain",
          objectFit === "scale-down" && "object-scale-down",
          objectFit === "none" && "object-none"
        )}
        {...(enableTransitionIn && {
          initial: { scale: 1.2, ...(enableFadeIn && { opacity: 0 }) },
          whileInView: {
            scale: 1,
            ...(enableFadeIn && { opacity: 1 }),
            transition: { duration: 0.4, ease: "easeOut" },
          },
        })}
      />
    </picture>
  )
);

export default A3Image;
