import * as React from 'react';
import { BlockProps } from '.';
// import { tupleNum, Omit } from '../_util/type';

// const TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5);

type LitleLevel = 1 | 2 | 3 | 4 | 5;

export type TitleProps = Omit<
  BlockProps & {
    level?: LitleLevel;
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  },
  'strong'
>;

const Title: React.FC<TitleProps> = ({
  level = 1,
  ...restProps
}: TitleProps) => {
  return <Base {...restProps} component={`h${level}`} />;
};

export default Title;
