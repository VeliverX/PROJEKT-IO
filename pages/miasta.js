import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<section class="flex justify-center pt-44 h-screen bg-yellow-400 ">
    <div class="leading-loose">
                <h class="font-bold text-4xl flex justify-center pb-16">Miasta w których działamy</h>
        <div class="mb-3 -mx-2 flex items-end pt-4 px-96 w-screen ">
            <div class="px-3 w-1/6 ml-80 ">               
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Warszawa</button>              
            </div>

            <div class="px-2 w-1/6">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Kraków</button>
            </div>

            <div class="px-2 w-1/6">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Łódź</button>
            </div>

            <div class="px-2 w-1/6">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Gdańsk</button>
            </div>

            <div class="px-2 w-1/6">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Poznań</button>
            </div>

            <div class="px-2 w-1/6 mr-80">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Wrocław</button>
            </div>
        </div>

        <div class="mb-3 -mx-2 flex items-end pt-4 flex justify-center px-96 w-screen">
            <div class="px-2 w-1/6 ml-96">               
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Gdynia</button>              
            </div>

            <div class="px-2 w-1/6">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Olsztyn</button>
            </div>

            <div class="px-2 w-1/6">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Bydgoszcz</button>
            </div>

            <div class="px-2 w-1/6">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Szczecin</button>
            </div>

            <div class="px-2 w-1/6 mr-96">
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Bielsko-Biała</button>
            </div>
        </div>
    </div>
</section>
  )
}