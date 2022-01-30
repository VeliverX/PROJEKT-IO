import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<section className="flex justify-center items-center h-screen bg-yellow-400">
    <div className="my-20 w-96">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6  border-b">
          <img
            className="h-24 w-24 rounded-full mx-auto"
            src="Elon.png"
            alt="Randy Robertson"/>
          <p className="pt-2 text-lg font-semibold">Elon Musk</p>
        </div>
        <div className="border-b">
        <Link href="">
        <a className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
        <p className="py-2 text-sm font-bold text-gray-800 leading-none">Zmień E-mail</p> 
        </a>
        </Link>
        <Link href="">
        <a className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
        <p className="py-2 text-sm font-bold text-gray-800 leading-none">Zmień Hasło</p> 
        </a>
        </Link>
        <Link href="">
        <a className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
        <p className="py-2 text-sm font-bold text-gray-800 leading-none">Zmień numer telefonu</p> 
        </a>
        </Link>
        <Link href="">
        <a className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
        <p className="py-2 text-sm font-bold text-gray-800 leading-none">Usuń konto</p> 
        </a>
        </Link>
        </div>

        <div className="">
        
          <Link href="konto_uzytkownika">
          <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p className="py-2 text-sm font-medium text-gray-800 leading-none">Powrót</p>
          </a>
          </Link>
        </div>
      </div>
    </div>
    </section>
  )
}