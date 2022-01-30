import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section className="flex justify-center items-center h-screen bg-yellow-400">
    <div className="max-w-md w-full bg-white rounded p-10  space-y-6">
        <div className="mb-4">
            <p className="flex justify-center text-gray-600 text-3xl font-medium	">Zmiena hasła</p>
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder=" Stare Hasło"></input>
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Nowe hasło"></input>
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Powtórz Hasło"></input>
        </div>
        <div>
            <button className="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200">Zmień</button>
        </div>
       
        <div>
        </div>  
    </div>
</section>
  )
}