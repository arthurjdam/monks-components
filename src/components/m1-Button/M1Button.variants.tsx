import { Props } from "./M1Button";

export const beforeIconVariant = () => ({
  rest: {
    scale: 0,
    transition: {
      ease: "circOut",
    },
  },
  hover: {
    scale: 1,
    transition: {
      ease: "circOut",
    },
  },
});

export const labelVariant = ({ label, icon, size }: Partial<Props>) => {
  return label && icon
    ? {
        rest: {
          x: 0,
          transition: {
            ease: "circOut",
          },
        },
        hover: {
          x: size === "medium" ? 70 : 40,
          transition: {
            ease: "circOut",
          },
        },
      }
    : {
        rest: {
          x: 0,
          transition: {
            ease: "circOut",
          },
        },
        hover: {
          x:
            size === "medium"
              ? [0, 20, 20, 0, 4, 0, 2, 0]
              : [0, 10, 10, 0, 4, 0, 2, 0],
          transition: {
            duration: 0.8,
            ease: "circOut",
          },
        },
      };
};

export const afterIconVariant = ({ label, icon, size }: Partial<Props>) => {
  return label && icon
    ? {
        rest: {
          scale: 1,
          transition: {
            ease: "circOut",
          },
        },
        hover: {
          scale: 0,
          transition: {
            ease: "circOut",
          },
        },
      }
    : {
        rest: {
          x: 0,
          transition: {
            ease: "circOut",
          },
        },
        hover: {
          x:
            size === "medium"
              ? [0, 20, 20, 0, 4, 0, 2, 0]
              : [0, 10, 10, 0, 4, 0, 2, 0],
          transition: {
            duration: 0.8,
            ease: "circOut",
          },
        },
      };
};

export const iconInsideVariant = ({ label, icon }: Partial<Props>) => {
  return label && icon
    ? undefined
    : {
        rest: {
          x: 0,
          transition: {
            ease: "circOut",
          },
        },
        hover: {
          x: [0, 60, -60, 60, -60, 0],
          transition: {
            ease: "circOut",
            times: [0, 0.3, 0.3, 0.7, 0.7, 1],
          },
        },
      };
};
