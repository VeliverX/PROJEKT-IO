
 import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'
export default function Home() {
  return (
    <body class="bg-gray-800" >
    <header class="bg-yellow-400 text-white shadow-lg hidden md:block sticky top-0 z-50">
      <Fragment>
  <div class="container mx-auto flex items-center h-24">
    <a href="" class="flex items-center justify-center">
      <img class="h-14" src="Logo.png" alt="logo" />
      <span class="ml-4 text-lg normal-case font-bold text-yellow-800">Döner<br/>Kebab</span>
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
<section class="bg-white pt-36 pb-36">
    <h3 class="text-2xl tracking-widest text-black text-center">Jak to działa?</h3>
    <h1 class="mt-8 text-center text-4xl text-blue-500 font-bold">Od jedzenia dzielą Cię 3 proste kroki.</h1>
    
    
    <div class="md:flex md:justify-center md:space-x-12 md:px-14">
    <Link href="rejestracja">
      <div class="mt-16 py-12 px-4 bg-yellow-400 w-72 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="px-16 py-4" src="login.png" alt="" />
          <div class="mt-4 text-blue-500 text-center">
            <h1 class="text-xl font-bold">Załóż konto</h1>
            <p class="mt-4 text-gray-600 pb-8">Załóż konto lub zaloguj się aby złożyć zamówienie.</p>
          </div>
        </div>  
      </div>
      </Link>

      <Link href="menu">
      <div class="mt-16 py-8 px-4 bg-yellow-400 w-72 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="px-16 py-4" src="doner-kebab.png" alt="" />
          <div class="mt-4 text-blue-500 text-center">
            <h1 class="text-xl font-bold">Wybierz danie</h1>
            <p class="mt-4 text-gray-600">Znajdz i dodaj ulubione danie do koszyka.</p>

          </div>
        </div>
      </div>
      </Link>
      
      <div class="mt-16 py-8 px-4 bg-whit w-72 bg-yellow-400 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="px-16 py-4" src="fast-delivery.png" alt="" />
          <div class="mt-4 text-blue-500 text-center">
            <h1 class="text-xl font-bold">Zapłać i czekaj na dostawę</h1>
            <p class="mt-4 text-gray-600">Zapłać online lub gotówką przy odbiorze i gotowe.</p>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-8">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class=" text-center sm:text-4xl text-5xl font-medium title-font mb-2 text-yellow-800">Galeria Produktów</h1>
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
<section class="flex justify-center py-12 h-auto bg-yellow-400 ">
<div class="max-w-screen-xl w-full bg-gray-800 rounded-2xl p-10  space-y-6">
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
<section class="bg-gray-800">
<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
			    <div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 ">
				    <h1   h1 class="text-3xl md:text-5xl pb-2  text-yellow-700">ZOSTAŃ KURIEREM</h1>
				    <h2 class="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Praca u nas to czysta przyjemność!</h2>
					<Link href="zostan_kurierem"> 
						<a class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Złóż Podanie</a>
					</Link>	
			        </div>
			    <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
				    <div class="h-52 flex flex-wrap content-center">
          <div>
            <img class=" h-50 m-auto border-2 rounded-2xl " src="kurier.jpg" ></img>
          </div>
      </div>
    </div>
  </div>
</section>
<section class="flex justify-center py-12 h-auto bg-yellow-400 ">
<div class="max-w-screen-xl w-full bg-gray-800 rounded-2xl p-10  space-y-6">
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
<section class="bg-gray-800">
<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
<div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml- lg:w-1/3  justify-center">
				    <div class="h-52 flex flex-wrap content-center">
          <div>
            <img class="h-96 m-auto border-2 rounded-2xl " src="pracownik.jpg" ></img>
          </div>
      </div>
    </div>
			    <div class="flex flex-col w-full lg:w-2/3 md:pt-5 justify-center items-start p-8">
				    <h1   h1 class="text-3xl md:text-5xl pb-2 text-yellow-700 pt-8">ZOSTAŃ PRACOWNIKIEM</h1>
				    <h2 class="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Nasz zespół powita Cię z otwartymi ramionami!</h2>
            <p1 class="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Dobrze płatna</p1>
            <p1 class="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Miła atmosfera</p1>
            <p1 class="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Nienormowany czas pracy</p1>
					<Link href="pracownik"> 
						<a class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Złóż Podanie</a>
					</Link>	
			        </div>
			   
  </div>
  <section class="flex justify-center pt-12 h-96 bg-yellow-400 ">
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
                <button class="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Bielsko-Biała</button>
            </div>
        </div>
    </div>
</section>
  <section class="bg-gray-800">
<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
			    <div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 ">
				    <h1   h1 class="text-3xl md:text-5xl pb-2  text-yellow-700">A MOŻE PARTNERSTWO!</h1>
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
