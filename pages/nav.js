import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'


export default function Home() {
  return (
<body >


<header class="bg-yellow-400 text-white shadow-lg hidden md:block sticky top-0 z-50">
    <Fragment>
<div class="container mx-auto flex items-center h-24">
  <a href="" class="flex items-center justify-center">
    <img class="h-14" src="Logo.png" alt="logo" />
    <span class="ml-4 text-lg normal-case font-bold text-white">Döner<br/> Kebab</span>
  </a>
  <nav class="contents font-semibold text-base lg:text-lg">
    <ul class="ml-auto flex items-center">
    <button class="
    relative 
    flex jutify-center items-center 
    bg-transparent 
    text-gray-600 rounded 
    group">
  
  <span class="#">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="44" 
      height="44" 
      fill="white"
      class="bi bi-list" 
      viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </span>
  <div class="
    absolute top-full
    hidden group-focus:block 
    min-w-full w-max 
    bg-white 
    shadow-md mt-1 rounded
    
  ">
    <ul class="text-left border rounded w-96">
      <Link href="strona_glowna">
      <li class="px-4 py-3 border-b hover:text-blue-500">
        Strona Główna
      </li>
      </Link>
      <Link href="menu">
      <li class="px-4 py-3 border-b hover:text-blue-500">
        Menu
      </li>
      </Link>
      <Link href="koszyk">
      <li class="px-4 py-3 border-b hover:text-blue-500">
        Zamów Teraz
      </li>
      </Link>
      <Link href="promocje">
      <li class="px-4 py-3 border-b hover:text-blue-500">
        Promocje
      </li>
      </Link>
      <Link href="najchetniej_zamawiane">
      <li class="px-4 py-3 border-b hover:text-blue-500">
        Najchętniej zamawiane
      </li>
      </Link>
      <Link href="rejestracja">
      <li class="px-4 py-3 border-b font-semibold hover:text-blue-500">
        Rejestracja
      </li>
      </Link>
      <Link href="login">
      <li class="px-4 py-3 bg-yellow-200 font-semibold hover:text-blue-500">
        Login
      </li>
      </Link>
    </ul>
  </div>
</button>
    <div class="m-4">
    <Link href="koszyk">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      fill="currentColor" 
      class="bi bi-cart3" 
      viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    </Link>
    </div>
    </ul>
  </nav>
</div>
</Fragment>
</header>



</body>

  )
}