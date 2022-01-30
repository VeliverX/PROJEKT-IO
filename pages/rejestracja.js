import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section class="flex justify-center items-center h-screen bg-yellow-400">
        <title>Rejestracja</title>
    <div class="max-w-md w-full bg-white rounded p-10  space-y-6">
        <div class="mb-4">
            <p class="flex justify-center text-gray-600 text-3xl font-medium	">Zarejestruj się</p>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Nazwa Użytkwonika"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Hasło"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Powtórz hasło"></input>
        </div>
        <div>
            <button class="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200">Zarejestruj się</button>
        </div>
        <div>
            <p class="text-xs text-gray-500">Klikając przycisk „Zarejestruj się”, akceptujesz regulamin serwisu oraz politykę prywatności.</p>
        </div>
          
        <div class="flex items-center justify-between">
            <div class="flex flex-row items-center">
                <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"></input>
                <label for="comments" class="ml-2 text-sm font-normal text-gray-600">Zapamiętaj hasło</label>
            </div>
        </div>
        <div> 
            <Link href="login">
            <a  class="flex justify-center text-sm text-gray-500 hover:underline" href="#">Mam już konto</a>  
            </Link> 
        </div>
    </div>
</section>
  )
}