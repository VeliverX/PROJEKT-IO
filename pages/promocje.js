import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
   
<body class="">
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
<section class="pt-12 bg-gray-100">
        <div class="container mx-auto px-6 sm:px-12 lg:py-6 xl:py-24 relative flex flex-col sm:flex-row">
            <div class="sm:w-1/2 sm:pt-8 lg:pt-80 pb-8 sm:pb-16 lg:pb-32 relative z-30">
                <h2 class="uppercase text-blue-900 font-bold tracking-wider text-2xl">Oferty specjalne</h2>
                <h1 class="uppercase font-black text-yellow-400 leading-none tracking-wider mb-6 mt-4 text-5xl lg:text-6xl xl:text-7xl">PROMOCJE </h1>
                <p class="text-gray-600 font-roboto text-lg sm:w-2/3 lg:w-1/2">Nowe promocje już wkrótce! Wpadaj regularnie i sprawdzaj, co dla Ciebie przygotowaliśmy.</p>
            </div>
            <div class="sm:w-1/2 lg:w-2/3 relative sm:absolute bottom-0 right-0 mb-24 ">
                <img class="absolute  object-cover z-10" src="promocje.png"></img>
                <svg class=" relative z-20 pt-8 -ml-16" 
                    xmlns="http://www.w3.org/2000/svg" 
                    data-name="Capa 1" 
                    viewBox="0 0 428.29 298.11"><defs/></svg>
            </div>
        </div>
</section>

<section class="bg-gray-100 pt-32 pb-60">
    <h1 class="text-2xl tracking-widest text-black text-center">Döner Kebab</h1>
    <h2 class="mt-8 text-center text-3xl text-yellow-400 font-bold">Takie promocje tylko u nas!</h2>
    
    <div class="flex justify-center md:space-x-12 md:px-14">
      <div class="mt-24 p-8 px-4 bg-white w-80 shadow-lg ">
        <div class="w-sm"> 
          <div class=" text-gray-700 text-center">
            <h1 class="text-xl font-bold pb-8">Rollo</h1>
            <img class="object-cover w-42 h-42 " src="rollo.png"></img>
            <div class="text-left">
                <a  class="ml-6 py-1 px-3 bg-yellow-400 bg-opacity-100 rounded-full text-sm font-bold text-gray-50 ">-10%</a>
            </div>
            <div class="text-left ml-6 pt-2">
            <div class="inline pr-1 pt-2 "> 
			    <a class="mb-2 text-xl font-bold">17,99 zł</a>
            </div>
                <s class="mb-2 ml-1">19,99 zł</s>
            </div>
            <p class="text-left ml-6">
                Duży rollo kebab
            </p>
          </div>
        </div>  
      </div>

      <div class="mt-24 py-8 px-4 bg-white w-80 shadow-lg">
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8">Frytki</h1>
            <img class="object-cover w-42 h-42 " src="frytki1.png"></img>
            <div class="text-left">
                <a  class="ml-6 py-1 px-3 bg-yellow-400 bg-opacity-100 rounded-full text-sm font-bold text-gray-50 ">-17%</a>
            </div>
            <div class="text-left ml-6 pt-2">
            <div class="inline pr-1 pt-2 "> 
			    <a class="mb-2 text-xl font-bold">9,99 zł</a>
            </div>
                <s class="mb-2 ml-1">11,99 zł</s>
            </div>
            <p class="text-left ml-6">
                Kup 2 razy frytki i zapłać mniej
            </p>
          </div>
        </div>
      </div>
      
      <div class="mt-24 py-8 px-4 w-80 bg-white shadow-lg">
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8">Napój</h1>
            <img class="object-cover w-42 h-42" src="pepsi.png"></img>
            <div class="text-left">
                <a  class="ml-6 py-1 px-3 bg-yellow-400 bg-opacity-100 rounded-full text-sm font-bold text-gray-50 ">-25%</a>
            </div>
            <div class="text-left ml-6 pt-2">
            <div class="inline pr-1 pt-2 "> 
			    <a class="mb-2 text-xl font-bold">5,99 zł</a>
            </div>
                <s class="mb-2 ml-1">7,99 zł</s>
            </div>
            <p class="text-left ml-6">
                Pepsi 330 ml
            </p>
          </div>
        </div>
      </div>

      <div class="mt-24 py-8 px-4 w-80 bg-white shadow-lg">
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8">Sos</h1>
            <img class="object-cover w-42 h-42" src="sos.png"></img>
            <div class="text-left">
                <a  class="ml-6 py-1 px-3 bg-yellow-400 bg-opacity-100 rounded-full text-sm font-bold text-gray-50 ">-10%</a>
            </div>
            <div class="text-left ml-6 pt-2">
            <div class="inline pr-1 pt-2 "> 
			    <a class="mb-2 ml-1 text-xl font-bold">4,49 zł</a>
            </div>
                <s class="mb-2 ml-1">4,99 zł</s>
            </div>
            <p class="text-left ml-6">
                Sos pikantny 35 g
            </p>
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