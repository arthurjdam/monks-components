import clsx from "clsx";
import { motion } from "framer-motion";
import A2Icon from "../a2-icon/A2Icon";
import A5Text from "../a5-text/A5Text";

const ease = [0.2, 0, 0, 1];

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
  numberCount,
  metadata,
  outlined,
  enableTransitionIn,
  href,
}) => {
  const beforeIconVariant = {
    rest: {
      scale: 0,
      transition: {
        ease,
      },
    },
    hover: {
      scale: 1,
      transition: {
        ease,
      },
    },
  };
  const labelVariant =
    label && icon
      ? {
          rest: {
            x: 0,
            transition: {
              ease,
            },
          },
          hover: {
            x: size === "medium" ? 70 : 40,
            transition: {
              ease,
            },
          },
        }
      : {
          rest: {
            x: 0,
            transition: {
              ease,
            },
          },
          hover: {
            x:
              size === "medium"
                ? [0, 20, 20, 0, 4, 0, 2, 0]
                : [0, 10, 10, 0, 4, 0, 2, 0],
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          },
        };
  const afterIconVariant =
    label && icon
      ? {
          rest: {
            scale: 1,
            transition: {
              ease,
            },
          },
          hover: {
            scale: 0,
            transition: {
              ease,
            },
          },
        }
      : {
          rest: {
            x: 0,
            transition: {
              ease,
            },
          },
          hover: {
            x:
              size === "medium"
                ? [0, 20, 20, 0, 4, 0, 2, 0]
                : [0, 10, 10, 0, 4, 0, 2, 0],
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          },
        };

  const iconInsideVariant = {
    rest: {
      x: 0,
      transition: {
        ease,
      },
    },
    hover: {
      x: [0, 60, -60, 60, -60, 0],
      transition: {
        ease,
        times: [0, 0.3, 0.3, 0.7, 0.7, 1],
      },
    },
  };

  const MotionA2Icon = motion(A2Icon);
  const Tag = motion(as || (href ? "a" : "button"));
  return (
    // @ts-ignore [ts] JSX element type 'Component' does not have any construct or call signatures. [2604]
    <Tag
      className={clsx(
        "inline-flex justify-center items-center whitespace-nowrap relative",
        !outlined
          ? "text-[color:var(--themed-background)]"
          : "text-[color:var(--themed-foreground)]",
        className
      )}
      initial="rest"
      whileHover="hover"
      animate="rest"
      // ref={containerRef}
    >
      {icon && label && (
        <motion.span
          //button-icon
          className={clsx(
            "inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden pointer-events-none origin-left absolute left-0",
            !outlined
              ? "bg-[color:var(--themed-foreground)]"
              : "border border-[color:var(--themed-foreground)]",
            size === "small" && "px-4 h-[4rem] w-[4rem] min-w-[4rem]",
            size === "medium" && "p-12 h-[7rem] w-[7rem] min-w-[7rem]"
          )}
          variants={beforeIconVariant}
        >
          <A2Icon
            name={icon}
            className={clsx(
              "absolute",
              size === "small" && "w-[5.6rem] h-[5.6rem]"
            )}
          />
        </motion.span>
      )}
      {label && (
        <motion.span
          // button-label
          className={clsx(
            "inline-flex justify-center items-center rounded-full relative",
            size === "small" && "px-4 h-[4rem] min-w-[4rem]",
            size === "medium" && "px-12 h-[7rem] min-w-[7rem]"
          )}
          variants={labelVariant}
        >
          <span
            //button-label-background
            className={clsx(
              "rounded-full absolute inset-0 origin-left",
              !outlined
                ? "bg-[color:var(--themed-foreground)]"
                : "border border-[color:var(--themed-foreground)]"
            )}
          />
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
                size === "small" && "py-1 px-2 ml-2 -mr-2",
                size === "medium" && "py-2 px-4 ml-4 -mr-4",
                "before:opacity-50 before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:border-current before:border before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full"
              )}
            />
          )}
        </motion.span>
      )}
      {icon && (
        <motion.span
          className={clsx(
            "inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden pointer-events-none origin-right",
            !outlined
              ? "bg-[color:var(--themed-foreground)]"
              : "border border-[color:var(--themed-foreground)]",
            size === "small" && "px-4 h-[4rem] w-[4rem] min-w-[4rem]",
            size === "medium" && "p-12 h-[7rem] w-[7rem] min-w-[7rem]"
          )}
          variants={afterIconVariant}
        >
          <MotionA2Icon
            name={icon}
            className={clsx(
              "absolute",
              size === "small" && "w-[5.6rem] h-[5.6rem]"
            )}
            variants={iconInsideVariant}
          />
        </motion.span>
      )}
    </Tag>
  );
};

export default M1Button;
