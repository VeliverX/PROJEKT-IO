import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<section class="flex justify-center items-center h-screen bg-yellow-400">
    <div class="my-20 w-96">
      <div class="bg-white rounded overflow-hidden shadow-lg">
        <div class="text-center p-6  border-b">
          <img
            class="h-24 w-24 rounded-full mx-auto"
            src="Elon.png"
            alt="Randy Robertson"/>
          <p class="pt-2 text-lg font-semibold">Elon Musk</p>
        </div>
        <div class="border-b">
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="py-2 text-sm font-medium text-gray-800 leading-none">Zamówienia</p>

            </div>
          </a>
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="py-2 text-sm font-medium text-gray-800 leading-none">Ustawienia</p>
            </div>
          </a>
          <Link href="zostan_kurierem">
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
            <svg class="h-5 w-5 text-black"  
            width="24" height="24" 
            viewBox="0 0 24 24" 
            stroke-width="1" 
            stroke="currentColor" 
            fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /></svg>
            </div>
            <div class="pl-3">
              <p class="py-2 text-sm font-medium text-gray-800 leading-none">Zostań kurierem</p>
            </div>
          </a>
          </Link>
          <Link href="pracownik">
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="py-2 text-sm font-medium text-gray-800 leading-none">Zostań naszym pracownikiem</p>

            </div>
          </a>
          </Link>
        </div>

        <div class="">
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="py-2 text-sm font-medium text-gray-800 leading-none">Regulamin</p>
          </a>
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="py-2 text-sm font-medium text-gray-800 leading-none">Pomoc</p>
          </a>
          <Link href="strona_glowna">
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="py-2 text-sm font-medium text-gray-800 leading-none">Wyloguj się</p>
          </a>
          </Link>
        </div>
      </div>
    </div>
    </section>
  )
}