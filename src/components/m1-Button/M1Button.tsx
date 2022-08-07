// import { useEffect, useRef } from "react";
import clsx from "clsx";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
import A2Icon from "../a2-icon/A2Icon";
import A5Text from "../a5-text/A5Text";
// import { fadeFromTo } from "../../animation/fade/fade";

type BaseProps = {
  as?: "a" | "button";
  label?: string;
  size?: "small" | "medium";
  className?: Array<string> | string;
  icon?: string;
  loading?: boolean;
  numberCount?: number;
  metadata?: string;
  outlined?: boolean;
  lightVariant?: boolean;
  responsiveBehaviour?:
    | "default"
    | "icon-on-small"
    | "small-to-medium"
    | "medium-to-small";
  hoverBehaviour?:
    | "default"
    | "none"
    | "reverse"
    | "move-icon"
    | "icon"
    | "bounce-icon";
  enableTransitionIn?: boolean;
  ariaLabel?: string;
  ariaControls?: string;
  mouseFollowerImage?: string;
  enableLoadMoreTransition?: boolean;
  isSecondaryCta?: boolean;
};
// export type ButtonOrLinkTypes = HTMLAnchorElement | HTMLButtonElement;
// type AnchorProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
// type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
export type Props = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const M1Button: React.FC<Props> = ({
  as,
  label,
  size = "medium",
  className,
  icon,
  metadata,
  numberCount,
  enableTransitionIn,
  href,
}) => {
  // const containerRef = useRef<HTMLElement>(null);
  // const labelRef = useRef<HTMLSpanElement>(null);
  // const labelBackgroundRef = useRef<HTMLSpanElement>(null);
  // const labelTextRef = useRef<HTMLSpanElement>(null);

  // useEffect(() => {
  //   const timeline = gsap.timeline({ paused: true });
  //   containerRef.current &&
  //     timeline.add(fadeFromTo(containerRef.current, { duration: 0.01 }));

  //   console.log("play!");
  //   timeline.play();
  // }, []);

  const Tag = as || (href ? "a" : "button");
  return (
    // @ts-ignore [ts] JSX element type 'Component' does not have any construct or call signatures. [2604]
    <Tag
      className={clsx(
        "inline-flex justify-center items-center whitespace-nowrap text-[color:var(--themed-background)]",
        className
      )}
      // ref={containerRef}
    >
      {label && (
        <span
          // button-label
          className={clsx(
            "inline-flex justify-center items-center rounded-full relative",
            size === "small" && "px-4 h-[4rem] min-w-[4rem]",
            size === "medium" && "px-12 h-[7rem] min-w-[7rem]"
          )}
          // ref={labelRef}
        >
          <span
            //button-label-background
            className="rounded-full absolute inset-0 origin-left bg-[color:var(--themed-foreground)]"
            // ref={labelBackgroundRef}
          />
          {/* <motion.div>asdf</motion.div> */}
          <A5Text
            // button-label-text
            copy={label}
            size="body-label"
            variant="sans-serif-medium"
            as="span"
            className="relative"
            // ref={labelTextRef}
          />
          {metadata && (
            <A5Text
              // button-label-metadata
              copy={metadata}
              size="body-label"
              variant="sans-serif-medium"
              as="span"
              className="relative ml-1.5 opacity-50"
            />
          )}
          {numberCount && (
            <A5Text
              // button-label-number
              copy={String(numberCount)}
              size="body-label"
              variant="sans-serif-medium"
              as="span"
              className={clsx(
                "relative inline-flex justify-center align-center",
                size === 'small' && 'py-1 px-2 ml-2 -mr-2',
                size === 'medium' && 'py-2 px-4 ml-4 -mr-4',
                "before:opacity-50 before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:border-current before:border before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full"
              )}
            />
          )}
          {/* cfA5TextTemplate(
                {
                  copy: metadata,
                  size: 'body-label',
                  variant: 'sans-serif-medium',
                  as: 'span',
                  className: 'button-label-metadata',
                },
                'button-label-metadata',
              )} */}
        </span>
      )}
      {icon && (
        <span
          className={clsx(
            "inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden pointer-events-none origin-left bg-[color:var(--themed-foreground)]",
            size === "small" && "px-4 h-16 min-w-[4rem]",
            size === "medium" && "p-12 h-28 min-w-[7rem]"
          )}
        >
          <A2Icon
            name={icon}
            className={clsx(
              "absolute",
              size === "small" && "w-[5.6rem] h-[5.6rem]"
            )}
          />
        </span>
      )}
      {/* ${icon &&
          html`<span data-ref="button-icon-wrapper" class="button-icon icon">
            ${cfA2IconTemplate({ name: icon }, 'button-icon')}
          </span>`} */}
    </Tag>
  );
};

export default M1Button;
