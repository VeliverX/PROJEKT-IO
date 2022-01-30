import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section class="flex justify-center items-center h-screen bg-yellow-400">
    <title>Kontakt</title>
    <div class="max-w-md w-full bg-white rounded p-10  space-y-6">
        <div class="mb-4">
            <p class="flex justify-center text-gray-600 text-3xl font-medium	">Kontakt</p>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="nazwa" placeholder="Nazwa"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="email" placeholder="Email"></input>
        </div>
        <div>
            <textarea 
            id="wiadomosc" 
            placeholder="Wiadomość" 
            cols="30" 
            rows="10"
            class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"></textarea>
        </div>
        <Link href="strona_glowna">
        <div>
            <button class="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200" type="submit">Wyslij</button>
        </div>
        </Link>
        <div>
        </div>  
        <div class="flex items-center justify-between">
        </div>
    </div>
</section>
  )
}
