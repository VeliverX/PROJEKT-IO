import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-800">
    <div className="max-w-md w-full bg-white rounded p-10  space-y-6">
        <div className="#">
            <p className="flex justify-center text-gray-600 text-3xl font-medium">Kontakt</p>
        </div>
        
        <div 
            className="text-xs uppercase text-gray-400 font-medium mb-6">MAIL
            <a href="#" className="my-3 block text-black hover:text-gray-500 text-sm font-medium duration-700 hover:underline">doner@kebab.com</a>
        </div>
        

        <div 
            className="text-xs uppercase text-gray-400 font-medium mb-6">ADRES
            <a href="#" className="my-3 block text-black hover:text-gray-500 text-sm font-medium duration-700 hover:underline">ul.Willowa 2, 43-309 Bielsko-Biała</a>
        </div>

        <div 
            className="text-xs uppercase text-gray-400 font-medium mb-6">INFO   LINIA
            <a href="#" className="my-3 block text-black hover:text-gray-500 text-sm font-medium duration-700 hover:underline">800-202-654</a>
        </div>
        
        <div>
        <Link href="menu">
        <a className="flex justify-center text-sm text-gray-500 hover:underline" href="#">Powrót</a>
        </Link>
        </div> 
    </div>
</section>
  )
}
