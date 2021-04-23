import aesthetic, { Direction, FontFace } from 'aesthetic';
import AphroditeAdapter from 'aesthetic-adapter-aphrodite';
import globalStyles from './themes/global';
import lightTheme from './themes/light';

export * from './styles';
// export { default as Baseline } from './Baseline';

export type Settings = {
    // defaultLocale?: Locale;
    // defaultTimezone?: TimeZone;
    // emojiCDN?: EmojiPath;
    // errorURL?: string;
    // traceURL?: string;
    fontFaces?: { [fontFamily: string]: FontFace[] };
    fontFamily?: string;
    // logger?: Logger | null;
    name: string;
    // rtl?: boolean;
    theme?: string;
    // translator?: Translator | null;
    // translatorComponent?: React.ComponentType<TranslateProps> | null;
  };

class Core {
  settings: Required<Settings> = {
    // defaultLocale: getLocaleFromClient() || DEFAULT_LOCALE,
    // defaultTimezone: getTimezoneFromClient() || DEFAULT_TIMEZONE,
    // emojiCDN: '',
    // errorURL: '',
    // traceURL: '',
    fontFaces: {},
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    // logger: null,
    name: 'Monks',
    // rtl: false,
    theme: 'light',
    // translator: null,
    // translatorComponent: null,
  };

  readonly aesthetic = aesthetic;

  initialize(settings: Settings) {
    this.settings = {
      ...this.settings,
      ...settings,
    };

    this.bootstrapAesthetic();
  }

  bootstrapAesthetic() {
    const { fontFaces, theme } = this.settings;
    const fontFamily = this.settings.fontFamily; //this.fontFamily();
    const globals = globalStyles(fontFaces);

    try {
      aesthetic
        .registerTheme('light', lightTheme(fontFamily), globals)
        // .registerTheme('dark', darkTheme(fontFamily), globals)

        // Aesthetic's ThemeContext default theme is "default",
        // so let's register a default theme based on light
        // so that downstream consumers don't break.
        .extendTheme('default', 'light', {});
    } catch {
      // Tests trigger an error, so ignore it
    }
    if (process.env.NODE_ENV === 'test') {
      // eslint-disable-next-line
      const { TestAdapter } = require('aesthetic/lib/testing');

      aesthetic.configure({
        // eslint-disable-next-line
        adapter: new TestAdapter(),
        extendable: true,
        theme: 'light',
      });
    } else {
      aesthetic.configure({
        adapter: new AphroditeAdapter(),
        extendable: true,
        // rtl,
        theme,
      });
    }
  }
}

export default new Core();
