import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (

<section className="bg-white py-16 h-screen">
    <h3 className="text-2xl tracking-widest text-black text-center">Jak to działa?</h3>
    <h1 className="mt-8 text-center text-4xl text-blue-500 font-bold">Od jedzenia dzielą Cię 3 proste kroki.</h1>

    
    <div className="md:flex md:justify-center md:space-x-16 md:px-14">
    <Link href="rejestracja">
      <div className="mt-16 py-12 px-4 bg-yellow-400 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <img className="px-16 py-4" src="login.png" alt="" />
          <div className="mt-4 text-blue-500 text-center">
            <h1 className="text-xl font-bold">Załóż konto</h1>
            <p className="mt-4 text-gray-600 pb-8">Załóż konto lub zaloguj się aby złożyć zamówienie.</p>
          </div>
        </div>  
      </div>
      </Link>

      <Link href="menu">
      <div className="mt-16 py-8 px-4 bg-yellow-400 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <img className="px-16 py-4" src="doner-kebab.png" alt="" />
          <div className="mt-4 text-blue-500 text-center">
            <h1 className="text-xl font-bold">Wybierz danie</h1>
            <p className="mt-4 text-gray-600">Znajdz i dodaj ulubione danie do koszyka.</p>

          </div>
        </div>
      </div>
      </Link>
      
      <div className="mt-16 py-8 px-4 bg-whit w-72 bg-yellow-400 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <img className="px-16 py-4" src="fast-delivery.png" alt="" />
          <div className="mt-4 text-blue-500 text-center">
            <h1 className="text-xl font-bold">Zapłać i czekaj na dostawę</h1>
            <p className="mt-4 text-gray-600">Zapłać online lub gotówką przy odbiorze i gotowe.</p>
          </div>
        </div>
      </div>
    </div>
    
  </section>
    )
}