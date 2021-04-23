import React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
// import { ServerStyleSheets } from '@arthurjdam/monks-components-core';
import { Baseline } from '@arthurjdam/monks-components-core';

export default class MyDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext,
//   ): Promise<DocumentInitialProps> {
//     const sheets = new ServerStyleSheets();
//     const originalRenderPage = ctx.renderPage;

//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//       });

//     const initialProps = await Document.getInitialProps(ctx);
//     return {
//       ...initialProps,
//       styles: [
//         ...React.Children.toArray(initialProps.styles),
//         sheets.getStyleElement(),
//       ],
//     };
//   }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
