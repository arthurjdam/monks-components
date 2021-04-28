/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { ReactElement } from 'react';
import * as style from './style';

export interface AvatarProps {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt?: string;
  /**
   * The `src` attribute for the `img` element
   */
  src?: string;
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet?: string;
  /**
   *  Override or extend the styles applied to the lemenet
   */
  className?: string;
  /**
   * The size of the component
   */
  size?: /*'small' | */'medium' | 'large';
  /**
   * Color of foreground
   */
  color?: string;
  /**
   * Color of background
   */
  backgroundColor?: string;
}

function Avatar({
  alt = '',
  src,
  srcSet,
  className,
  size = 'medium',
  color,
  backgroundColor,
  children: childrenProp,
}: React.PropsWithChildren<AvatarProps>): ReactElement {
  let children = null;
  const loaded = useLoaded({ src, srcSet });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';

  if (hasImgNotFailing) {
    children = <img alt={alt} src={src} srcSet={srcSet} css={style.img} />;
  } else if (childrenProp != null) {
    children = childrenProp;
  } /* if (hasImg && alt) */ else {
    children = alt[0].toUpperCase();
  } /* else {
    children = <Person className={classes.fallback} />;
  }*/

  return (
    <div
      css={[
        style.avatar,
        size === 'large' ? style.avatarLarge : style.avatarMedium,
      ]}
      className={className}
      style={{
        color: color && color,
        backgroundColor: backgroundColor && backgroundColor,
      }}
    >
      {children}
    </div>
  );
}

function useLoaded({ src, srcSet }: { src?: string; srcSet?: string }) {
  const [loaded, setLoaded] = React.useState<'loaded' | 'error' | false>(false);

  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);

    let active = true;
    const image: HTMLImageElement = new Image();
    if (srcSet) {
      image.srcset = srcSet;
    } else if (src) {
      image.src = src;
    }
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = (e) => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };

    return () => {
      active = false;
    };
  }, [src, srcSet]);

  return loaded;
}

export default Avatar;
