import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const ResultChampionship = ({ day }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }
  console.log(day, 'ciciicicicici')

  return (
    <>
      <aside class="w-64" aria-label="Sidebar">
        <div class="overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
          <ul class="space-y-2">
            {/* Inizio tabella A1 Maschile*/}
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="doubleDropdown"
              class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="ml-3 flex-1 whitespace-nowrap text-left"
                sidebar-toggle-item=""
              >
                Serie A1 Maschile
              </span>
              <svg
                sidebar-toggle-item=""
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-example" class="hidden space-y-2 py-2">
              <li>
                {/* <Link href={`/results/${day.numberDay}`}>
                  <a class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Regular Season
                  </a>
                </Link> */}
              </li>
              <li>
                <a
                  href="#"
                  class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Classica
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Marcatori
                </a>
              </li>
            </ul>
            {/* Fine tabella A1 Maschile*/}
            {/* Inizio tabella A1 Femminile*/}
            <button
              id="doubleDropdownButton2"
              data-dropdown-toggle="doubleDropdown"
              class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example2"
            >
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="ml-3 flex-1 whitespace-nowrap text-left"
                sidebar-toggle-item=""
              >
                Serie A1 Femminile
              </span>
              <svg
                sidebar-toggle-item=""
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-example2" class="hidden space-y-2 py-2">
              <li>
                <a
                  href="#"
                  class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Regular Season
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Classica
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Marcatori
                </a>
              </li>
            </ul>
            {/* Fine tabella A1 Femminile*/}
          </ul>
        </div>
      </aside>

      <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
    </>
  )
}

export default ResultChampionship
