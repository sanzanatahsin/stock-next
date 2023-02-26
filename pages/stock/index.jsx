import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ stock }) {

  function deleteBlog(id) {
    fetch(`http://localhost:3000/api/stock/products/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        alert("Deleting " + id)
      })

  }

  return (
    <>
      <Head>
        <title>Stock</title>
      </Head>
      <h1>Stock</h1>
      <table><tbody>
        {
          stock.map(stock => {
            return (
              <tr key={stock._id}>
                <td>
                  <Link href={`/stock/${stock._id}`}>
                    {stock.code}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteBlog(stock._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/stock/products/`)
  const stock = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { stock } }
}