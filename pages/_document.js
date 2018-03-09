import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            media="screen"
            href="/static/react-select.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            media="screen"
            href="/static/react-datepicker.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            media="screen"
            href="/static/styles.css"
          />
        </Head>
        <body className="custom_class">
          <div className="main-wrapper">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
