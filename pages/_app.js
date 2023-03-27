import '@/styles/globals.css'
import Head from 'next/head'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Movie Picker</title>
      <meta name='keywords' content="movies"></meta>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>



  </>


  )
}
