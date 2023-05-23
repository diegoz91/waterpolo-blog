import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="text xl mb-8 border-b pb-4 font-semibold">Guarda Anche</h3>
      {categories.map((category) => (
        <>
          <Link key={category.slug} href={`/${category.slug}`}>
            <span className="mb-3 block cursor-pointer pb-3">
              {category.name}
            </span>
          </Link>
        </>
      ))}
      <Link href={`/teams`}>
        <span className="mb-3 block cursor-pointer pb-3">SQUADRE</span>
      </Link>
      <Link href={`/stream`}>
        <span className="mb-3 block cursor-pointer pb-3">STREAM</span>
      </Link>
    </div>
  )
}

export default Categories
