import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
 
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="An implementation of the popular Hulu website using NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results results={results} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
    ).then(res => res.json());

  return {
    props: {
      results: request.results,
    },
  }
}