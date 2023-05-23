import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TeamCard = ({ players }) => {
  /*  */
  const [foo, setFoo] = useState([])
  useEffect(() => setFoo(players.players))

  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              name
            </th>
            <th scope="col" class="py-3 px-6">
              surname
            </th>
            <th scope="col" class="py-3 px-6">
              anno nascita
            </th>
            <th scope="col" class="py-3 px-6">
              nazionalità
            </th>
            <th scope="col" class="py-3 px-6">
              ruolo
            </th>
            <th scope="col" class="py-3 px-6">
              palmares
            </th>
          </tr>
        </thead>
        <tbody>
          {foo?.map((player, i) => {
            return (
              <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                >
                  {player.name}
                </th>
                <td class="py-4 px-6">{player.surname}</td>
                <td class="py-4 px-6">{player.yearOfBirth}</td>
                <td class="py-4 px-6">{player.nationality}</td>
                <td class="py-4 px-6">{player.role}</td>
                <td class="py-4 px-6">
                  <Link href={`/player/${player.slug}`} key={i}>
                    <a class="font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Leggi di più
                    </a>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TeamCard
