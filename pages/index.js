import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <Head> 
      <title>Sanzana </title>
    </Head>
    <h1>Sanzana Page</h1>
    <p>
      This is a sample page for Sanzana.
    </p>
    <Link href="/about">About</Link>
    </>
   )
  }