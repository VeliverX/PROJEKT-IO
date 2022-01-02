import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<body>
<header class="bg-yellow-400 text-white shadow-lg hidden md:block sticky top-0 z-50">
    <Fragment>
<div class="container mx-auto flex items-center h-24">
  <Link href="strona_glowna">
  <div>
  <a href="" class="flex items-center justify-center">
    <img class="h-14" src="Logo.png" alt="logo" />
    <span class="ml-4 text-lg normal-case font-semibold text-white">Döner Kebab</span>
  </a>
  </div>
  </Link>
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
<section class="bg-gray-100 pt-32 pb-36 ">
    <h1 class="text-2xl tracking-widest text-black text-center">Döner Kebab</h1>
    <h2 class="mt-8 text-center text-3xl text-yellow-400 font-bold">Najczęściej zamawiane</h2>

    <div class="md:flex md:justify-center md:space-x-2 md:px-14">
      <div class="mt-24 p-8 px-4 bg-white w-96 shadow-lg ">
        <div class="w-sm">
        <div class="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-16 -left-12 "></div> 
          <div class=" text-gray-700 text-center">
          <img class="object-cover w-42 h-42 mb-20" src="rollo.png"></img>
                  
          </div>
        </div>  
      </div>

      <div class="mt-24 py-8 px-4 bg-white w-96 shadow-lg">
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8 pt-8">Kebab Rollo</h1>
            
            <p class="text-xl p-2">
                Bułka
            </p>
            <p class="text-xl p-2">
                Mięso
            </p>
            <p class="text-xl p-2">
                Warzywa
            </p>
            <p class="text-xl p-2">
                Sos
            </p>

          </div>
        </div>
      </div>
    </div>

    <div class="md:flex md:justify-center md:space-x-2 md:px-14">
      <div class="mt-24 p-8 px-4 bg-white w-96 shadow-lg ">
        <div class="w-sm">
        <div class="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-16 -left-12 "></div> 
          <div class=" text-gray-700 text-center">
          <img class="object-cover w-42 h-42 mb-20" src="Kebab1.png"></img>
                  
          </div>
        </div>  
      </div>

      <div class="mt-24 py-8 px-4 bg-white w-96 shadow-lg">
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8 pt-8">Kebab Klasyczny</h1>
            
            <p class="text-xl p-2">
                Chlebek
            </p>
            <p class="text-xl p-2">
                Pita
            </p>
            <p class="text-xl p-2">
                Mięso
            </p>
            <p class="text-xl p-2">
                Warzywa
            </p>
            <p class="text-xl p-2">
                Sos
            </p>
            
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex md:justify-center md:space-x-2 md:px-14">
      <div class="mt-24 p-8 px-4 bg-white w-96 shadow-lg ">
        <div class="w-sm">
        <div class="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-16 -left-12 "></div>
          <div class=" text-gray-700 text-center">
          <img class="object-cover w-42 h-42 mb-20" src="frytki1.png"></img>
                  
          </div>
        </div>  
      </div>

      <div class="mt-24 py-8 px-4 bg-white w-96 shadow-lg">
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8 pt-8">Frytki</h1>
            
          </div>
        </div>
      </div>
    </div>
</section>
<footer class="bg-gray-800">
<a href="" class="flex items-center justify-center pt-10 pb-14">
      <img class="h-10" src="Logo.png" alt="logo" />
      <span class="ml-3 text-sm normal-case font-medium text-gray-300 ">DÖNER KEBAB</span>
    </a>
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">   
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                PRZYDATNE LINKI
            </div>

            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                O nas
            </a>
            <Link href="kontakt">
            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Kontakt
            </a>
            </Link>
            <Link href="lokalizacja">
            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Lokalizacja
            </a>
            </Link>
        </div>

        
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Döner Kebab
            </div>

            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Pomoc
            </a>
            <Link href="regulamin">
            <a class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Regulamin
            </a>
            </Link>
            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Polityka prywatności
            </a>
        </div>

        
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Płatności
            </div>

            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                VISA
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                PAY PAL
            </a>
            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Mastercard
            </a>
            
        </div>

        
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                SPOŁECZNOŚĆ
            </div>
              <a href="" button class="flex items-center pl-1 pb-1 rounded-full">
                <img class="h-9 hover:bg-blue-600 duration-1000 rounded-full " src="Facebook.png"  alt="fb" />
                <span class="ml-3 text-sm normal-case text-gray-300 font-medium">Facebook</span>
              </a>  
              <a href="" button class="flex items-center p-1 rounded-full ">
                <img class="h-9 hover:bg-blue-400 duration-1000 rounded-full" src="Twitter.png" alt="tw" />
                <span class="ml-3 text-sm normal-case text-gray-300 font-medium">Twitter</span>
              </a>
              <a href="" button class="flex items-center p-1 rounded-full">
                <img class="h-9 hover:bg-pink-500 duration-1000 rounded-full" src="Instagram.png" alt="insta" />
                <span class="ml-3 text-sm normal-case text-gray-300 font-medium">Instagram</span>
              </a>
        </div>
    </div>

    
    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
                © Copyright 2021 Döner Kebab.
            </div>
        </div>
    </div>
</footer>
</body>
  )
}