
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'


export default function Home() {
  return (
    
    <body class="bg-gray-800" >
      <title>Strona główna</title>
    <header class="bg-yellow-400 text-white  hidden md:block sticky top-0 z-50 ">
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
  <div class="contents font-semibold text-base lg:text-lg">
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
  </div>
</div>
</Fragment>
</header>
<section class="bg-gray-100 pt-36 pb-48">
<div class="custom-shape-divider-top-1641766565">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <h3 class="text-2xl tracking-widest text-black text-center">Jak to działa?</h3>
    <h1 class="mt-8 text-center text-4xl text-yellow-400 font-bold">Od jedzenia dzielą Cię 3 proste kroki.</h1>
    
    
    <div class="md:flex md:justify-center md:space-x-12 md:px-14">
    <Link href="rejestracja">
      <div class="mt-16 py-12 px-4 bg-white w-72 shadow-lg hover:shadow-xl mx-auto md:mx-0 ">
        <div class="w-sm">
          <svg xmlns="http://www.w3.org/2000/svg" 
               width="96" 
               height="96" 
               fill="currentColor" 
               class="ml-20" 
               viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          <div class="mt-4 text-yellow-400 text-center">
            <h1 class="text-xl font-bold">Załóż konto</h1>
            <p class="mt-4 text-gray-600 pb-8 mb">Załóż konto lub zaloguj się aby złożyć zamówienie.</p>
          </div>
        </div>  
      </div>
      </Link>

      <Link href="menu">
      <div class="mt-16 py-8 px-4 bg-white w-72 shadow-lg hover:shadow-xl mx-auto md:mx-0">
        <div class="w-sm">
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="96" 
             height="96" 
             fill="currentColor" 
             class="ml-20" 
             viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
          <div class="mt-4 text-yellow-400 text-center">
            <h1 class="text-xl font-bold">Wybierz danie</h1>
            <p class="mt-4 text-gray-600">Znajdz i dodaj ulubione danie do koszyka.</p>

          </div>
        </div>
      </div>
      </Link>
      
      <div class="mt-16 py-8 px-4 bg-whit w-72 bg-white shadow-lg hover:shadow-xl mx-auto md:mx-0">
        <div class="w-sm">
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="96" 
        height="96" 
        fill="currentColor" 
        class="ml-20" 
        viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
      </svg>
          <div class="mt-4 text-yellow-400 text-center">
            <h1 class="text-xl font-bold">Zapłać i czekaj na dostawę</h1>
            <p class="mt-4 text-gray-600">Zapłać online lub gotówką przy odbiorze i gotowe.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-800">
<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
			    <div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 ">
				    <h1   h1 class="text-3xl md:text-5xl pb-2  text-yellow-400">Bądź z nami mobilnie!</h1>
				    <h2 class="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Szybki dostęp w każdym miejscu i o każdej porze?</h2>
            <p1 class="text-xl md:text-xl leading-relaxed text-white md:leading-snug mb-2">Nie ma nic prostrzego!</p1>
            <nav class="contents font-semibold text-base lg:text-lg">
              <ul class="flex items-center">
              <li class="p-5 xl:p-8">
					<Link href="https://play.google.com/"> 
						<a class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Google Play</a>
					</Link>	
          </li>
          <li class="p-5 xl:p-8">
          <Link href="https://www.apple.com/pl/app-store/"> 
						<a class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Apple Store</a>
					</Link>	
          </li>
          </ul>
          </nav>
			        </div>
			    <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3 w-2/3  justify-center">
				    <div class="h-52 flex flex-wrap content-center">
          <div>
            <img class=" h-2/3 sm:pl-24 lg:h-full mt- m-auto pl-10" src="app.png" ></img>
          </div>
      </div>
    </div>
  </div>
</section> 
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-8">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class=" text-center sm:text-4xl text-5xl font-medium title-font mb-2 text-yellow-400">Galeria Produktów</h1>
        <h1 class=" text-center sm:text-3xl text-4xl font-medium title-font mb-2 text-gray-400">A ty na co masz dziś ochotę?</h1>
        
      </div>
    </div>

    
    <div class="flex flex-wrap -m-4">
      
      
      <div class="lg:w-1/3 p-4 w-1/2">
        <a class="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div class="mt-4 text-center">
          <h3 class="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Kebab w bułce</h3>
        </div>
      </div>
      <div class="lg:w-1/3 p-4 w-1/2">
        <a class="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div class="mt-4 text-center">
          <h3 class="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Rollo</h3>
        </div>
      </div>
      <div class="lg:w-1/3 p-4 w-1/2">
        <a class="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div class="mt-4 text-center">
          <h3 class="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Kubełek</h3>

        </div>
      </div>
      <div class="lg:w-1/3 p-4 w-1/2">
        <a class="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div class="mt-4 text-center">
          <h3 class="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Rollo Amerykańskie</h3>
        </div>
      </div>
      <div class="lg:w-1/3 p-4 w-1/2">
        <a class="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div class="mt-4 text-center">
          <h3 class="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Frytki</h3>
        </div>
      </div>
      <div class="lg:w-1/3 p-4 w-1/2">
        <a class="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div class="mt-4 text-center">
          <h3 class="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Sałatka Kebab</h3>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="flex justify-center py-12 h-auto bg-yellow-400 pb-44 pt-44">
<div class="max-w-screen-xl w-full bg-gray-800  p-10  space-y-6">
  <h1 class="flex justify-center text-white text-3xl font-medium">FAQ:</h1>
    <div>
    <p1 class="flex justify-center text-gray-200">Ile za dowóz?</p1>
    <p2 class="flex justify-center text-gray-400">Na terenie naszego miasta za darmo, poza 2zł.</p2>
    </div>
    <div>
    <p1 class="flex justify-center text-gray-200">Co jeżeli nie bedę mógł odebrać zamówienia?</p1>
    <p2 class="flex justify-center text-gray-400">Kurier skontaktuje się z państwem by omówić szczegóły.</p2>
    </div>
    <div>
    <p1 class="flex justify-center text-gray-200">Czy jest możliwość przygotowania personalizowanego zamówienia( np. bez sałatki)?</p1>
    <p2 class="flex justify-center text-gray-400">Tak, jest to możliwe. W takim przypadku należy skontaktowac sie z nami na naszej infolini. 800-202-654 </p2>
    </div>
</div>
</section>
<section class="bg-gray-100  pb-36">
  <div class="custom-shape-divider-top-1642345992">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
  </div>
    <h1 class="text-2xl tracking-widest text-black text-center">Döner Kebab</h1>
    <h2 class="mt-8 text-center text-3xl text-yellow-400 font-bold">Zamawiaj u najlepszych.</h2>
    
    <div class="md:flex md:justify-center md:space-x-12 md:px-14">
      <div class="mt-24 p-8 px-4 bg-white w-80 shadow-lg ">
       <div class="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-20 left-24 ">
           <div class="ml-5 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="58" height="58" 
                    fill="white" 
                    class="bi bi-handbag-fill" 
                    viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
                </svg>
           </div>
       </div>
        <div class="w-sm"> 
          <div class=" text-gray-700 text-center">
            <h1 class="text-xl font-bold pb-8">Twoje korzyści</h1>
            <li class="mt-4 text-gray-600 pb-2 block text-left mx-4 flex space-x-2 ">
            <svg class="inline-block w-12 h-8 text-yellow-400 " 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Programie Punkty: zbieraj punkty i wymieniaj je na świetne oferty
            </li>
            <li class="mt-4 text-gray-600 pb-2 block text-left mx-4	flex space">
            <svg class="inline-block w-28 h-8 text-yellow-400 " 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
            Zbieraj pieczątki: Bierz udział w promocjach i konkursach. Najświeższe informacje znajdziesz w naszych newsletterach i na kanałach społecznościowych
            </li>      
          </div>
        </div>  
      </div>

      <div class="mt-24 py-8 px-4 bg-white w-80 shadow-lg">
      <div class="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-20 left-24 ">
      <div class="ml-5 mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="58" height="58" 
                    fill="white" 
                    class="bi bi-handbag-fill" 
                    viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
                </svg>
           </div>
      </div>
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8">Gwarantujemy</h1>
            <li class="mt-4 text-gray-600 pb-2 block text-left mx-4	flex space-x-4">
            <svg class="inline-block w-6 h-8 text-yellow-400" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Doskonały serwis za darmo
            </li>
            <li class="mt-4 text-gray-600 pb-2 block text-left mx-4 flex space-x-4">
            <svg class="inline-block w-6 h-8 text-yellow-400" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Sprawdzone opinie klientów
            </li>
          </div>
        </div>
      </div>
      
      <div class="mt-24 py-8 px-4 w-80 bg-white shadow-lg">
      <div class="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-20 left-24 ">
      <div class="ml-5 mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="58" height="58" 
                    fill="white" 
                    class="bi bi-handbag-fill" 
                    viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
           </div>
      </div>
        <div class="w-sm">
          <div class="text-gray-700  text-center">
            <h1 class="text-xl font-bold pb-8">Oferujemy</h1>
            <li class="mt-4 text-gray-600 pb-2 block text-left mx-4	flex space-x-4">
            <svg class="inline-block w-8 h-8 text-yellow-400" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Restauracje w największych mistach Polski
            </li>
            <li class="mt-4 text-gray-600 pb-2 block text-left	mx-4 flex space-x-4">
            <svg class="inline-block w-6 h-8 text-yellow-400" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Płatność gotówką oraz online
            </li>
            <li class="mt-4 text-gray-600 pb-2 block text-left mx-4 flex space-x-4">
                <svg class="inline-block w-16 h-8 text-yellow-400" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
            Zamawiaj kiedy chcesz, gdzie chcesz, z Twojego ulubionego urządzenia mobilnego
            </li>
          </div>
        </div>
      </div>
    </div>
    
</section>

<section class="bg-yellow-400  ">
<div class="container mx-auto flex flex-col md:flex-row items-center p-24 pb-36 ">
			    <div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8  ">
				    <h1   h1 class="text-3xl md:text-5xl pb-2  text-blue-500 mt-24">ZOSTAŃ KURIEREM</h1>
				    <h2 class="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Praca u nas to czysta przyjemność!</h2>
					<Link href="zostan_kurierem"> 
						<a class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Złóż Podanie</a>
					</Link>	
			        </div>
			    <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
				    <div class="h-52 flex flex-wrap content-center">
          <div>
            <img class=" h-50 m-auto border-2 rounded-2xl mt-24" src="kurier.jpg" ></img>
          </div>
      </div>
    </div>
  </div>
</section>
<section class="flex justify-center pt-24 pb-36 h-auto bg-yellow-400 ">
<div class="max-w-screen-xl w-full bg-gray-800  p-10  space-y-6">
  <h1 class="flex justify-center text-white text-3xl font-medium">Nasze składniki:</h1>
    <div>
    <p1 class="flex justify-center text-gray-200">Dbamy o to by produtky był każdego dnia swierze, a co za tym idzie najsmaczniejsze:</p1>
    </div>
    <div>
    <p1 class="flex justify-center text-gray-200">Warzywa:</p1>
    <p2 class="flex justify-center text-gray-400">Wszystkie warzywa w naszej restauracji pozystkiwane są od lokalnych dostawców gwarantując pełnię smaku!</p2>
    </div>
    <div>
    <p1 class="flex justify-center text-gray-200">Mięso:</p1>
    <p2 class="flex justify-center text-gray-400">Mieso pochodzi prosto od naszego sprawdzonego hodowcy!</p2>
    </div>
</div>
</section>
<div class="custom-shape-divider-top-1642342006">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
<section class="bg-gray-800">
<div class="container mx-auto flex flex-col md:flex-row items-center my-12 mb-52">
<div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml- lg:w-1/3  justify-center">
				    <div class="h-52 flex flex-wrap content-center">
          <div>
            <img class="h-96 m-auto border-2 rounded-2xl " src="pracownik.jpg" ></img>
          </div>
      </div>
    </div>
			    <div class="flex flex-col w-full lg:w-2/3 md:pt-5 justify-center items-start p-8">
				    <h1   h1 class="text-3xl md:text-5xl pb-2 text-yellow-400 pt-8">ZOSTAŃ PRACOWNIKIEM</h1>
				    <h2 class="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Nasz zespół powita Cię z otwartymi ramionami!</h2>
            <p1 class="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Dobrze płatna</p1>
            <p1 class="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Miła atmosfera</p1>
            <p1 class="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Nienormowany czas pracy</p1>
					<Link href="pracownik"> 
						<a class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Złóż Podanie</a>
					</Link>	
			        </div>
  </div>
    <div class="custom-shape-divider-bottom-1642336185">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
      </svg>
    </div>
  <section class="flex justify-center pt-12 h-flex bg-yellow-400 ">
    <div class="leading-loose ">
    <img alt="ecommerce" class="w-36 h-36 mx-auto mb-8 mt-8" src="city1.png"></img>
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

        <div class="mb-3 -mx-2 flex items-end pt-4 justify-center px-96 w-screen">
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
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black ">Bielsko-Biała</button>
            </div>
        </div>
    </div>
    
</section>
<div class="custom-shape-divider-top-1642337239">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
  <section class="bg-gray-800">
<div class="container mx-auto flex flex-col md:flex-row items-center my-12 pb-52">
			    <div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 ">
				    <h1   h1 class="text-3xl md:text-5xl pb-2  text-yellow-400">A MOŻE PARTNERSTWO!</h1>
				    <h2 class="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Chcesz dołączyć do naszej sieci rstauracji. Nie ma nic prostszego!</h2>
            <p1 class="text-xl md:text-xl leading-relaxed text-white md:leading-snug mb-2">Skontaktuj sie z nami juz teraz!</p1>
					<Link href="zostan_kurierem"> 
						<a class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Kontakt</a>
					</Link>	
			        </div>
			    <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
				    <div class="h-52 flex flex-wrap content-center">
          <div>
            <img class=" h-50 m-auto border-2 rounded-2xl " src="partnerstwo.png" ></img>
          </div>
      </div>
    </div>
  </div>
</section> 

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
            <Link href="aktualnosci">
            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Aktualności
            </a>
            </Link>
          <Link href="o_nas">
            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                O nas
            </a>
            </Link>
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
