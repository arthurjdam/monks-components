import { deepmerge } from '@material-ui/utils';
import createBreakpoints from './createBreakpoints';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import shape from './styleOptions/shape';
import createSpacing from './createSpacing';
import transitions from './transitions';
// import zIndex from './zIndex';

export type Direction = 'ltr' | 'rtl';

export interface ThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: BreakpointsOptions;
  direction?: Direction;
  mixins?: MixinsOptions;
  overrides?: Overrides;
  palette?: PaletteOptions;
  props?: ComponentsProps;
  shadows?: Shadows;
  spacing?: SpacingOptions;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
  unstable_strictMode?: boolean;
}

export interface Theme {
  shape: Shape;
  breakpoints: Breakpoints;
  direction: Direction;
//   mixins: Mixins;
  overrides?: Overrides;
  palette: Palette;
  props?: ComponentsProps;
//   shadows: Shadows;
  spacing: Spacing;
//   transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
//   unstable_strictMode?: boolean;
}


function createTheme(options: ThemeOptions = {}, ...args): Theme {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);

  let theme = deepmerge(
    {
      breakpoints,
      direction: 'ltr',
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      overrides: {}, // Inject custom styles
      palette,
      props: {}, // Provide default props
      shadows,
      typography: createTypography(palette, typographyInput),
      spacing,
      shape,
      transitions,
      zIndex,
    },
    other,
  );

  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);

  return theme;
}

export default createMuiTheme;