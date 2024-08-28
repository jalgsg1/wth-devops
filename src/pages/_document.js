import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <p style={nameStyle}>By José Andrés Lizano Gallegos</p>
    </Html>
  )
}

const nameStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: '5px',
};
