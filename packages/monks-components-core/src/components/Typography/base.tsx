import * as React from 'react';

export interface TypographyProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  ['aria-label']?: string;
}

interface InternalTypographyProps extends TypographyProps {
  component?: string;
}

const Typography: React.ForwardRefRenderFunction<
  unknown,
  InternalTypographyProps
> = (
  {
    component: Component = 'article',
    className,
    'aria-label': ariaLabel,
    children,
    ...restProps
  }: InternalTypographyProps,
  ref,
) => {
  const mergedRef = ref;

  return (
    <Component
      className={className}
      aria-label={ariaLabel}
      ref={mergedRef}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Typography;
