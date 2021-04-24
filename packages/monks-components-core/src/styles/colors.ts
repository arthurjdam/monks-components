import { Hexcode } from '../types';

type NamedColor =
  | 'yellow'
  | 'orange'
  | 'peach'
  | 'pink'
  | 'purple'
  | 'ultramarine'
  | 'cyan'
  | 'green'
  | 'warm'
  | 'cool'
  | 'grey';

type ColorMap = Record<NamedColor, ColorSet>;
type ColorSet = Record<'100' | '500' | '900', Hexcode>;

const colorMap: ColorMap = {
  yellow: {
    '100': '#FFF0A9',
    '500': '#FFCB16',
    '900': '#270F0F',
  },
  orange: {
    '100': '#FFDDAB',
    '500': '#FB961F',
    '900': '#360E0B',
  },
  peach: {
    '100': '#FFC6C3',
    '500': '#EB405F',
    '900': '#440035',
  },
  pink: {
    '100': '#FFB2E8',
    '500': '#FF2CE4',
    '900': '#371534',
  },
  purple: {
    '100': '#DFBBFE',
    '500': '#7D26C9',
    '900': '#3C0C60',
  },
  ultramarine: {
    '100': '#CBF6FF',
    '500': '#4F24EE',
    '900': '#001D38',
  },
  cyan: {
    '100': '#BAFFF1',
    '500': '#4DBAC1',
    '900': '#0D3842',
  },
  green: {
    '100': '#E1FF9A',
    '500': '#00DC7C',
    '900': '#002838',
  },
  warm: {
    '100': '#EAE8E4',
    '500': '#C0B9B0',
    '900': '#2D2D2D',
  },
  cool: {
    '100': '#DEDFE5',
    '500': '#656982',
    '900': '#2C2D38',
  },
  grey: {
    '100': '#FFF',
    '500': '#E4E4E5',
    '900': '#000',
  },
};

export default colorMap;
