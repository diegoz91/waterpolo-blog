import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/router'

const Header = () => {
  const [categories, setCategories] = useState([])

  const router = useRouter()
  const { success, canceled } = router.query
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  //incomincia stripe
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  )

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    //const query = new URLSearchParams(window.location.search)
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log('Order placed! You will receive an email confirmation.')
      }

      if (canceled) {
        console.log(
          'Order canceled -- continue to shop around and checkout when you’re ready.'
        )
      }
    }
  }, [success, canceled])
  //finisce stripe

  return (
    
    <>
    <form action="/api/checkout_sessions" method="POST" target="_blank">
            <section>
              <button className="m-5 inline-flex items-center rounded border-b-4 border-blue-700 bg-white py-2 px-4 font-bold text-black hover:border-blue-500 hover:bg-blue-200">
                <img className="mr-3" src="icons8-bar-16.png" />
                <span>Dona un caffe</span>
              </button>
            </section>
          </form>
      <div className="container mx-auto mb-8 px-10">
        <div className="inline-block w-full border-b border-blue-400 py-8">
        
          <div className="block md:float-left">
            <Link href="/">
              <span className="cursor-pointer text-4xl font-bold text-white">
                <img src="WP_N24_logo-ai.svg" alt="" />
              </span>
            </Link>
          </div>
          
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link href={`/${category.slug}`}>
                <span className="mt-10 ml-10 cursor-pointer align-middle text-2xl font-semibold text-white md:float-right">
                  {category.name}
                </span>
              </Link>
            ))}
            <Link href={`/teams`}>
              <span className="mt-10 ml-10 cursor-pointer align-middle text-2xl font-semibold text-white md:float-right">
                SQUADRE
              </span>
            </Link>
            <Link href={`/stream`}>
              <span className="mt-10 ml-10 cursor-pointer align-middle text-2xl font-semibold text-white md:float-right">
                STREAM
              </span>
            </Link>
            <Link href={`/results`}>
              <span className="mt-10 ml-10 cursor-pointer align-middle text-2xl font-semibold text-white md:float-right">
                RISULTATI
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
