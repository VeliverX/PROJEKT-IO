import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<section className="flex justify-center items-center h-screen bg-yellow-400">
<div className="bg-white h-96 w-96">
      <div className="bg-white p-6  md:mx-auto">
            <img className="flex px-32 py-4" src="remove.png" alt="" />
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Płatność odrzucona!</h3>
            <p className="text-gray-600 my-2">Transakcja nie powiodła się.</p>
            <Link href="strona_glowna"> 
            <div className="py-16 text-center">
                <a href="#" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    SPRÓBUJ PONOWNIE 
               </a>
            </div>
            </Link>
        </div>
    </div>
  </div>
</section>  
    )
}