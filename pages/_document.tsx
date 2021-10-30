import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  // Этот блок есть в документации он стандартный;
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    // Функция принимает в себя контекст
    const initialProps = await Document.getInitialProps(ctx);
    return {
      // И возвращает в некотороые наши изначальные пропсы
      ...initialProps,
    };
  }

  render(): JSX.Element {
    return (
      <Html lang='ru'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
