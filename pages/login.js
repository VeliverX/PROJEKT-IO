import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section class="flex justify-center items-center h-screen bg-yellow-400">
        <title>Logowanie</title>
    <div class="max-w-md w-full bg-white rounded p-10  space-y-6">
        <div class="mb-4">
            <p class="flex justify-center text-gray-600 text-3xl font-medium	">Logowanie</p>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="emial" placeholder="Email"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Hasło"></input>
        </div>
        <Link href="konto_uzytkownika">
        <div>
            <button class="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200">Zaloguj się</button>
        </div>
        </Link>
        <div>
        <Link href="login_pracownik">
        <a class="flex justify-center text-sm text-gray-500 hover:underline pb-4" href="#">Zaloguj jako pracownik</a>
        </Link>
        <Link href="rejestracja">
        <a class="flex justify-center text-sm text-gray-500 hover:underline" href="#">Załóż konto</a>
        </Link>
        </div>  
        <div class="flex items-center justify-between">
            <div class="flex flex-row items-center">
                <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"></input>
                <label for="comments" class="ml-2 text-sm font-normal text-gray-600">Zapamiętaj hasło</label>
            </div>
            <div>
                <Link href="resetuj_haslo">   
                <a class="text-sm text-gray-500 hover:underline" href="#">Zapomniałeś hasła?</a>
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}