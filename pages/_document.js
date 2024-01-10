import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'EM Talks by Kevin C.',
    description: 'Engineering Management experience between Mercado Livre and VTEX from a frontend engineer slash designer.'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} /> */}
        {/* <meta name="twitter:image" content={meta.image} /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <script async src="https://us.umami.is/script.js" data-website-id="fec316e4-7a8d-4229-9bd8-92ad9350a8cf"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
