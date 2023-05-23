import React from 'react'
import Link from 'next/link'

const Teams = ({ team }) => {
  //console.log(team)
  return (
    <>
      <div className="relative h-72">
        <div
          className="absolute inline-block h-72 w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
          style={{ backgroundImage: `url('${team.image.url}')` }}
        />
        <div className="absolute h-72 w-full rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black bg-center opacity-50" />

        <Link href={`/teams/${team.slug}`}>
          <span className="absolute h-full w-full cursor-pointer" />
        </Link>
      </div>
    </>
  )
}

export default Teams;
