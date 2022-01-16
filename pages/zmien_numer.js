import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section class="flex justify-center items-center h-screen bg-yellow-400">
    <div class="max-w-md w-full bg-white rounded p-10  space-y-6">
        <div class="mb-4 text-center">
            <p class="flex justify-center text-gray-600 text-3xl font-medium	">Zmiena numeru kontaktowego</p>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder=" Stary Numer"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Nowy Numer"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Powtórz Numer"></input>
        </div>
        <div>
            <button class="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200">Zmień</button>
        </div>
        <div>
        </div>  
    </div>
</section>
  )
}