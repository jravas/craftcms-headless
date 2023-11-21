import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/api?query=%7Bping%7D");
  const quotes = await res.json();

  return {
    props: {
      quotes: quotes,
    },
  };
}

export default function Home({ quotes }) {
  console.log(quotes)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* <span>Total quotes: {quotes}</span> */}
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
