import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<body>
<header class="bg-yellow-400 text-white shadow-lg hidden md:block sticky top-0 z-50">
      <Fragment>
  <div class="container mx-auto flex items-center h-24">
    <a href="" class="flex items-center justify-center">
      <img class="h-14" src="Logo.png" alt="logo" />
      <span class="ml-4 text-lg normal-case font-bold text-white">Döner Kebab</span>
    </a>
    <nav class="contents font-semibold text-base lg:text-lg">
      <ul class="ml-auto flex items-center">
        <li class="p-5 xl:p-8 active">
          <Link href="./">
            Strona Głowna
          </Link>
        </li>
        <li class="p-5 xl:p-8">
          <Link href="menu">
            Menu
          </Link>
        </li>
        <li class="p-5 xl:p-8">
          <Link href="koszyk">
            Zamów Teraz
          </Link>
        </li>
        <li class="border-2 border-yellow-700 rounded-full font-bold px-8 py-2 hover:bg-yellow-700 bg-opacity-10" border>
          <Link href="login">
            Login
          </Link>
        </li>
        <li class="border-2 border-yellow-700 rounded-full font-bold px-8 py-2 ml-4 hover:bg-yellow-700 bg-opacity-10" border>
          <Link href="rejestracja">
            Rejestracja
          </Link>
        </li>
        <Link href="koszyk" class="flex items-end justify-end">
          <img class="h-14 ml-7 rounded-full hover:shadow hover:bg-yellow-100 " src= "koszyk.png"  alt="logo" ></img>
        </Link>
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
</body>
  )
}