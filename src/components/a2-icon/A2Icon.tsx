import * as React from "react";
import clsx from "clsx";

// export const svgContext = require.context("./svg/?raw", false, /\.svg/);
// export const icons = svgContext
//   .keys()
//   .map<string>(
//     (path = "") => (path.split("/").pop() ?? "").split(".").shift() ?? ""
//   );

export interface Props {
  name: string;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

const A2Icon = React.forwardRef<HTMLSpanElement, Props>(
  ({ name, className, ariaLabel, ariaHidden }, ref) => {
    const Icon = React.lazy(() => import(`./jsx/${name}`));

    return (
      <span
        className={clsx("w-28 h-28 inline-block align-middle", className)}
        aria-hidden={ariaHidden}
        aria-label={ariaLabel}
        ref={ref}
      >
        <React.Suspense
          fallback={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70"></svg>
          }
        >
          <Icon />
        </React.Suspense>
      </span>
    );
  }
);

export default A2Icon;