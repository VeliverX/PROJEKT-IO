import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<section class="flex justify-center pt-44 h-screen bg-yellow-400">
<title>Płatność</title>
<div class="leading-loose">
  <form class="max-w-xl  p-10 bg-white rounded shadow-xl  ">
    <p class="text-gray-800 font-medium font-bold">Podaja dane karty</p>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600 pt-4" for="cus_name">Imię</label>
      <input class="w-full px-2 py-2 text-gray-600 border-2 border-gray-200 rounded focus:outline-none focus:border-blue-600 transition-colors cursor-pointer" placeholder="Imię" aria-label="Imię"></input>
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600 pt-4" for="cus_nazwisko">Nazwisko</label>
      <input class="w-full px-2 py-2 text-gray-600 border-2 border-gray-200 rounded focus:outline-none focus:border-blue-600 transition-colors cursor-pointer" placeholder="Nazwisko" aria-label="Nazwisko"></input>
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600 pt-4" for="cus_email">Numer Karty</label>
      <input class="w-full px-2 py-2 text-gray-600 border-2 border-gray-200 rounded focus:outline-none focus:border-blue-600 transition-colors cursor-pointer" placeholder="XXXX XXXX XXXX XXXX" aria-label="Numer karty"></input>
    </div>
    <div class="mb-3 -mx-2 flex items-end pt-4">
            <div class="px-2 w-1/3">
                <label class="font-bold text-sm mb-2 ml-1">Data ważności</label>
                <div>
                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-600 transition-colors cursor-pointer">
                        <option value="" selected disabled>MM</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>

            <div class="px-2 w-1/3">
                <div>
                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-600 transition-colors cursor-pointer">
                    <option value="" selected disabled>YY</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2020">2030</option>
                    </select>
                </div>
            </div>

            <div class="px-2 w-1/3">
                <input class="form-select w-full px-3 py-1 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-600 transition-colors cursor-pointer" placeholder="CVV" aria-label="Email"></input>
            </div>
        </div>
        
    <div class="inline-block mt-4 pr-3 pt-4">
        <Link href="potwierdzenie_platnosci"> 
			<a class="duration-1000 bg-yellow-400 hover:bg-blue-600 text-white hover:text-white rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Zapłać</a>
		</Link>	
    </div>
    <label class="text-sm mb-2 ml-1">Łącznie:</label>
  </form>
</div>
</section>
    )
}