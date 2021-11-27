import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'
export default function Home() {
    return (
        <body>
        <header class="bg-yellow-500 text-white shadow-lg hidden md:block">
        <Fragment>
    <div class="container mx-auto flex items-center h-24">
      <a href="" class="flex items-center justify-center">
        <img class="h-14" src="Logo.png" alt="logo" />
        <span class="ml-4 text-lg normal-case font-bold text-yellow-700">Döner<br/>Kebab</span>
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
          <li class="border-2 border-yellow-700 rounded-full font-bold px-8 py-2 hover:bg-yellow-700 " border>
            <Link href="login">
              Login
            </Link>
          </li>
          <li class="border-2 border-yellow-700 rounded-full font-bold px-8 py-2 ml-4 hover:bg-yellow-700 " border>
            <Link href="rejestracja">
              Rejestracja
            </Link>
          </li>
          <Link href="koszyk" class="flex items-end justify-end">
          <img class="h-14 ml-16 rounded-full hover:shadow hover:bg-yellow-100  " src= "koszyk.png"  alt="logo" ></img>
        </Link>
        </ul>
      </nav>
    </div>
    </Fragment>
  </header>
  <div class="w-full bg-gray-800">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
            <h2 class="text-lg font-extrabold text-indigo-600">MENU</h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">Sprawdź nasze produkty!</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="kebab.png" alt="produkt"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Kebab</p>
                    <p class="text-base text-yellow-300 font-normal">16zł</p>
                    <p class="text-base text-indigo-600 font-normal hover:text-white" >Baranina, Sałatka, Sos, Bułka</p>
                </div>
            </div>
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="kebab.png" alt="produkt"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Rollo</p>
                    <p class="text-base text-yellow-300 font-normal">20zł</p>
                    <p class="text-base text-indigo-600 font-normal hover:text-white" >Baranina, Sałatka, Sos, Pita</p>
                </div>
            </div>
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="kebab.png" alt="produkt"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Kubełek</p>
                    <p class="text-base text-yellow-300 font-normal">25zł</p>
                    <p class="text-base text-indigo-600 font-normal hover:text-white" >Frytki, Sałatka, Sos, Baranina, W Kubełeku</p>
                </div>
            </div>
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="kebab.png" alt="produkt"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Rollo Amerykańskie</p>
                    <p class="text-base text-yellow-300 font-normal">17zł</p>
                    <p class="text-base text-indigo-600 font-normal hover:text-white" >Baranina, Frytki, Sos, Pita</p>
                </div>
            </div>
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="kebab.png" alt="produkt"></img>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Frytki</p>
                    <p class="text-base text-yellow-300 font-normal">6zł</p>
                    <p class="text-base text-indigo-600 font-normal hover:text-white" >Fytki z głębokiego oleju</p>
                </div>
            </div>
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="kebab.png" alt="produkt"></img>
                </div>
                <div class="text-center ">
                    <p class="text-xl text-white font-bold mb-2">Sałatka Kebab</p>
                    <p class="text-base text-yellow-300 font-normal">21zł</p>
                    <p class="text-base text-indigo-600 font-normal hover:text-white " >Kurczak, Sałatka, oliwa, sos majonezowy</p>
                </div>
            </div>
        </div>
    </section>
</div>
  </body>
  
    )}