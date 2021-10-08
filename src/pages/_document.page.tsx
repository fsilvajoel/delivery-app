import Document, { Html, Head, Main, NextScript } from 'next/document';

import { html5Shiv } from '~snippets/html5shiv';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <script
            id="html5shiv"
            dangerouslySetInnerHTML={{ __html: html5Shiv }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
