
 import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'
export default function Home() {
  return (
    <body className="bg-gray-800" >
    <header className="bg-yellow-400 text-white shadow-lg hidden md:block sticky top-0 z-50">
    <Fragment>
<div className="container mx-auto flex items-center h-24">
  <Link href="strona_glowna">
    <div>
    <a href="" className="flex items-center justify-center">
      <img className="h-14" src="Logo.png" alt="logo" />
      <span className="ml-4 text-lg normal-case font-semibold text-white">Döner Kebab</span>
    </a>
    </div>
    </Link>
  <nav className="contents font-semibold text-base lg:text-lg">
    <ul className="ml-auto flex items-center">
    <button id="przycisk"  className="
    relative 
    flex jutify-center items-center 
    bg-transparent 
    text-gray-600 rounded 
    group">
  
  <span className="#">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="44" 
      height="44" 
      fill="white"
      className="bi bi-list" 
      viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </span>
  <div className="
    absolute top-full
    hidden group-focus:block 
    min-w-full w-max 
    bg-white 
    shadow-md mt-1 rounded
    
  ">
    <ul id="menu" className="text-left border rounded w-96">
      <Link href="strona_glowna">
      <li className="px-4 py-3 border-b hover:text-blue-500">
        Strona Główna
      </li>
      </Link>
      <Link href="menu">
      <li className="px-4 py-3 border-b hover:text-blue-500">
        Menu
      </li>
      </Link>
      <Link href="koszyk">
      <li className="px-4 py-3 border-b hover:text-blue-500">
        Zamów Teraz
      </li>
      </Link>
      <Link href="promocje">
      <li id="porom" className="px-4 py-3 border-b hover:text-blue-500">
        Promocje
      </li>
      </Link>
      <Link href="najchetniej_zamawiane">
      <li className="px-4 py-3 border-b hover:text-blue-500">
        Najchętniej zamawiane
      </li>
      </Link>
      <Link href="rejestracja">
      <li className="px-4 py-3 border-b font-semibold hover:text-blue-500">
        Rejestracja
      </li>
      </Link>
      <Link href="login">
      <li className="px-4 py-3 bg-yellow-200 font-semibold hover:text-blue-500">
        Login
      </li>
      </Link>
    </ul>
  </div>
</button>
    <div className="m-4">
    <Link href="koszyk">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      fill="currentColor" 
      className="bi bi-cart3" 
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
<section className="bg-white pt-36 pb-36">
    <h3 className="text-2xl tracking-widest text-black text-center">Jak to działa?</h3>
    <h1 className="mt-8 text-center text-4xl text-blue-500 font-bold">Od jedzenia dzielą Cię 3 proste kroki.</h1>
    
    
    <div className="md:flex md:justify-center md:space-x-12 md:px-14">
    <Link href="rejestracja">
      <div className="mt-16 py-12 px-4 bg-yellow-400 w-72 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <img className="px-16 py-4" src="login.png" alt="" />
          <div className="mt-4 text-blue-500 text-center">
            <h1 className="text-xl font-bold">Załóż konto</h1>
            <p className="mt-4 text-gray-600 pb-8">Załóż konto lub zaloguj się aby złożyć zamówienie.</p>
          </div>
        </div>  
      </div>
      </Link>

      <Link href="menu">
      <div className="mt-16 py-8 px-4 bg-yellow-400 w-72 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <img className="px-16 py-4" src="doner-kebab.png" alt="" />
          <div className="mt-4 text-blue-500 text-center">
            <h1 className="text-xl font-bold">Wybierz danie</h1>
            <p className="mt-4 text-gray-600">Znajdz i dodaj ulubione danie do koszyka.</p>

          </div>
        </div>
      </div>
      </Link>
      
      <div className="mt-16 py-8 px-4 bg-whit w-72 bg-yellow-400 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm">
          <img className="px-16 py-4" src="fast-delivery.png" alt="" />
          <div className="mt-4 text-blue-500 text-center">
            <h1 className="text-xl font-bold">Zapłać i czekaj na dostawę</h1>
            <p className="mt-4 text-gray-600">Zapłać online lub gotówką przy odbiorze i gotowe.</p>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <section className="bg-gray-800">
<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
			    <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 ">
				    <h1   h1 className="text-3xl md:text-5xl pb-2  text-yellow-700">Bądź z nami mobilnie!</h1>
				    <h2 className="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Szybki dostęp w każdym miejscu i o każdej porze?</h2>
            <p1 className="text-xl md:text-xl leading-relaxed text-white md:leading-snug mb-2">Nie ma nic prostrzego!</p1>
            <nav className="contents font-semibold text-base lg:text-lg">
              <ul className="flex items-center">
              <li className="p-5 xl:p-8">
					<Link href="https://play.google.com/"> 
						<a className="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Google Play</a>
					</Link>	
          </li>
          <li className="p-5 xl:p-8">
          <Link href="https://www.apple.com/pl/app-store/"> 
						<a className="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Apple Store</a>
					</Link>	
          </li>
          </ul>
          </nav>
			        </div>
			    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3 w-2/3  justify-center">
				    <div className="h-52 flex flex-wrap content-center">
          <div>
            <img className=" h-2/3 sm:pl-24 lg:h-full mt- m-auto pl-10" src="app.png" ></img>
          </div>
      </div>
    </div>
  </div>
</section> 
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-8">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className=" text-center sm:text-4xl text-5xl font-medium title-font mb-2 text-yellow-800">Galeria Produktów</h1>
        <h1 className=" text-center sm:text-3xl text-4xl font-medium title-font mb-2 text-gray-400">A ty na co masz dziś ochotę?</h1>
        
      </div>
    </div>

    
    <div className="flex flex-wrap -m-4">
      
      
      <div className="lg:w-1/3 p-4 w-1/2">
        <a className="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Kebab w bułce</h3>
        </div>
      </div>
      <div className="lg:w-1/3 p-4 w-1/2">
        <a className="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Rollo</h3>
        </div>
      </div>
      <div className="lg:w-1/3 p-4 w-1/2">
        <a className="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Kubełek</h3>

        </div>
      </div>
      <div className="lg:w-1/3 p-4 w-1/2">
        <a className="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Rollo Amerykańskie</h3>
        </div>
      </div>
      <div className="lg:w-1/3 p-4 w-1/2">
        <a className="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Frytki</h3>
        </div>
      </div>
      <div className="lg:w-1/3 p-4 w-1/2">
        <a className="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="kebab.png"></img>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-400 text-xs tracking-widest title-font font-semibold py-1 mb-1 border-2 rounded-lg border-gray-700">Sałatka Kebab</h3>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="flex justify-center py-12 h-auto bg-yellow-400 ">
<div className="max-w-screen-xl w-full bg-gray-800 rounded-2xl p-10  space-y-6">
  <h1 className="flex justify-center text-white text-3xl font-medium">FAQ:</h1>
    <div>
    <p1 className="flex justify-center text-gray-200">Ile za dowóz?</p1>
    <p2 className="flex justify-center text-gray-400">Na terenie naszego miasta za darmo, poza 2zł.</p2>
    </div>
    <div>
    <p1 className="flex justify-center text-gray-200">Co jeżeli nie bedę mógł odebrać zamówienia?</p1>
    <p2 className="flex justify-center text-gray-400">Kurier skontaktuje się z państwem by omówić szczegóły.</p2>
    </div>
    <div>
    <p1 className="flex justify-center text-gray-200">Czy jest możliwość przygotowania personalizowanego zamówienia( np. bez sałatki)?</p1>
    <p2 className="flex justify-center text-gray-400">Tak, jest to możliwe. W takim przypadku należy skontaktowac sie z nami na naszej infolini. 800-202-654 </p2>
    </div>
</div>
</section>

<section className="bg-gray-100 pt-32 pb-36">
    <h1 className="text-2xl tracking-widest text-black text-center">Döner Kebab</h1>
    <h2 className="mt-8 text-center text-3xl text-yellow-400 font-bold">Zamawiaj u najlepszych.</h2>
    
    <div className="md:flex md:justify-center md:space-x-12 md:px-14">
      <div className="mt-24 p-8 px-4 bg-white w-80 shadow-lg ">
       <div className="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-20 left-24 ">
           <div className="ml-5 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="58" height="58" 
                    fill="white" 
                    className="bi bi-handbag-fill" 
                    viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
                </svg>
           </div>
       </div>
        <div className="w-sm"> 
          <div className=" text-gray-700 text-center">
            <h1 className="text-xl font-bold pb-8">Twoje korzyści</h1>
            <li className="mt-4 text-gray-600 pb-2 block text-left mx-4 flex space-x-2 ">
            <svg className="inline-block w-12 h-8 text-yellow-400 " 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Programie Punkty: zbieraj punkty i wymieniaj je na świetne oferty
            </li>
            <li className="mt-4 text-gray-600 pb-2 block text-left mx-4	flex space">
            <svg className="inline-block w-28 h-8 text-yellow-400 " 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
            Zbieraj pieczątki: Bierz udział w promocjach i konkursach. Najświeższe informacje znajdziesz w naszych newsletterach i na kanałach społecznościowych
            </li>      
          </div>
        </div>  
      </div>

      <div className="mt-24 py-8 px-4 bg-white w-80 shadow-lg">
      <div className="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-20 left-24 ">
      <div className="ml-5 mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="58" height="58" 
                    fill="white" 
                    className="bi bi-handbag-fill" 
                    viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
                </svg>
           </div>
      </div>
        <div className="w-sm">
          <div className="text-gray-700  text-center">
            <h1 className="text-xl font-bold pb-8">Gwarantujemy</h1>
            <li className="mt-4 text-gray-600 pb-2 block text-left mx-4	flex space-x-4">
            <svg className="inline-block w-6 h-8 text-yellow-400" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Doskonały serwis za darmo
            </li>
            <li className="mt-4 text-gray-600 pb-2 block text-left mx-4 flex space-x-4">
            <svg className="inline-block w-6 h-8 text-yellow-400" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Sprawdzone opinie klientów
            </li>
          </div>
        </div>
      </div>
      
      <div className="mt-24 py-8 px-4 w-80 bg-white shadow-lg">
      <div className="w-24 h-24  bg-yellow-400 relative rounded-full flex -top-20 left-24 ">
      <div className="ml-5 mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="58" height="58" 
                    fill="white" 
                    className="bi bi-handbag-fill" 
                    viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
           </div>
      </div>
        <div className="w-sm">
          <div className="text-gray-700  text-center">
            <h1 className="text-xl font-bold pb-8">Oferujemy</h1>
            <li className="mt-4 text-gray-600 pb-2 block text-left mx-4	flex space-x-4">
            <svg className="inline-block w-8 h-8 text-yellow-400" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Restauracje w największych mistach Polski
            </li>
            <li className="mt-4 text-gray-600 pb-2 block text-left	mx-4 flex space-x-4">
            <svg className="inline-block w-6 h-8 text-yellow-400" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                Płatność gotówką oraz online
            </li>
            <li className="mt-4 text-gray-600 pb-2 block text-left mx-4 flex space-x-4">
                <svg className="inline-block w-16 h-8 text-yellow-400" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
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

<section className="bg-gray-800">
<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
			    <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 ">
				    <h1   h1 className="text-3xl md:text-5xl pb-2  text-yellow-700">ZOSTAŃ KURIEREM</h1>
				    <h2 className="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Praca u nas to czysta przyjemność!</h2>
					<Link href="zostan_kurierem"> 
						<a className="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Złóż Podanie</a>
					</Link>	
			        </div>
			    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
				    <div className="h-52 flex flex-wrap content-center">
          <div>
            <img className=" h-50 m-auto border-2 rounded-2xl " src="kurier.jpg" ></img>
          </div>
      </div>
    </div>
  </div>
</section>
<section className="flex justify-center py-12 h-auto bg-yellow-400 ">
<div className="max-w-screen-xl w-full bg-gray-800 rounded-2xl p-10  space-y-6">
  <h1 className="flex justify-center text-white text-3xl font-medium">Nasze składniki:</h1>
    <div>
    <p1 className="flex justify-center text-gray-200">Dbamy o to by produtky był każdego dnia swierze, a co za tym idzie najsmaczniejsze:</p1>
    </div>
    <div>
    <p1 className="flex justify-center text-gray-200">Warzywa:</p1>
    <p2 className="flex justify-center text-gray-400">Wszystkie warzywa w naszej restauracji pozystkiwane są od lokalnych dostawców gwarantując pełnię smaku!</p2>
    </div>
    <div>
    <p1 className="flex justify-center text-gray-200">Mięso:</p1>
    <p2 className="flex justify-center text-gray-400">Mieso pochodzi prosto od naszego sprawdzonego hodowcy!</p2>
    </div>
</div>
</section>
<section className="bg-gray-800">
<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
<div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml- lg:w-1/3  justify-center">
				    <div className="h-52 flex flex-wrap content-center">
          <div>
            <img className="h-96 m-auto border-2 rounded-2xl " src="pracownik.jpg" ></img>
          </div>
      </div>
    </div>
			    <div className="flex flex-col w-full lg:w-2/3 md:pt-5 justify-center items-start p-8">
				    <h1   h1 className="text-3xl md:text-5xl pb-2 text-yellow-700 pt-8">ZOSTAŃ PRACOWNIKIEM</h1>
				    <h2 className="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Nasz zespół powita Cię z otwartymi ramionami!</h2>
            <p1 className="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Dobrze płatna</p1>
            <p1 className="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Miła atmosfera</p1>
            <p1 className="text-2xl md:text-3xl leading-relaxed text-white md:leading-snug mb-2"> : Nienormowany czas pracy</p1>
					<Link href="pracownik"> 
						<a className="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Złóż Podanie</a>
					</Link>	
			        </div>
			   
  </div>
  <section className="flex justify-center pt-12 h-96 bg-yellow-400 ">
    <div className="leading-loose">
                <h className="font-bold text-4xl flex justify-center pb-16">Miasta w których działamy</h>
        <div className="mb-3 -mx-2 flex items-end pt-4 px-96 w-screen ">
            <div className="px-3 w-1/6 ml-80 ">               
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Warszawa</button>              
            </div>

            <div className="px-2 w-1/6">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Kraków</button>
            </div>

            <div className="px-2 w-1/6">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Łódź</button>
            </div>

            <div className="px-2 w-1/6">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Gdańsk</button>
            </div>

            <div className="px-2 w-1/6">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Poznań</button>
            </div>

            <div className="px-2 w-1/6 mr-80">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Wrocław</button>
            </div>
        </div>

        <div className="mb-3 -mx-2 flex items-end pt-4 justify-center px-96 w-screen">
            <div className="px-2 w-1/6 ml-96">               
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Gdynia</button>              
            </div>

            <div className="px-2 w-1/6">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Olsztyn</button>
            </div>

            <div className="px-2 w-1/6">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Bydgoszcz</button>
            </div>

            <div className="px-2 w-1/6">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Szczecin</button>
            </div>

            <div className="px-2 w-1/6 mr-96">
                <button className="w-full py-3 bg-white bg-opacity-80 rounded-full text-lg font-bold text-black">Bielsko-Biała</button>
            </div>
        </div>
    </div>
</section>
  <section className="bg-gray-800">
<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
			    <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 ">
				    <h1   h1 className="text-3xl md:text-5xl pb-2  text-yellow-700">A MOŻE PARTNERSTWO!</h1>
				    <h2 className="text-3xl md:text-5xl leading-relaxed text-white md:leading-snug mb-2">Chcesz dołączyć do naszej sieci rstauracji. Nie ma nic prostszego!</h2>
            <p1 className="text-xl md:text-xl leading-relaxed text-white md:leading-snug mb-2">Skontaktuj sie z nami juz teraz!</p1>
					<Link href="zostan_kurierem"> 
						<a className="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Kontakt</a>
					</Link>	
			        </div>
			    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3  justify-center">
				    <div className="h-52 flex flex-wrap content-center">
          <div>
            <img className=" h-50 m-auto border-2 rounded-2xl " src="partnerstwo.png" ></img>
          </div>
      </div>
    </div>
  </div>
</section> 

</section>
<footer className="bg-gray-800">
<a href="" className="flex items-center justify-center pt-10 pb-14">
      <img className="h-10" src="Logo.png" alt="logo" />
      <span className="ml-3 text-sm normal-case font-medium text-gray-300 ">DÖNER KEBAB</span>
    </a>
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">   
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                PRZYDATNE LINKI
            </div>
            <Link href="aktualnosci">
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Aktualności
            </a>
            </Link>
          <Link href="o_nas">
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                O nas
            </a>
            </Link>
            <Link href="kontakt">
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Kontakt
            </a>
            </Link>
            <Link href="lokalizacja">
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Lokalizacja
            </a>
            </Link>
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Döner Kebab
            </div>

            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Pomoc
            </a>
            <Link href="regulamin">
            <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Regulamin
            </a>
            </Link>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Polityka prywatności
            </a>
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Płatności
            </div>

            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                VISA
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                PAY PAL
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Mastercard
            </a>
            
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                SPOŁECZNOŚĆ
            </div>
              <a href="" button className="flex items-center pl-1 pb-1 rounded-full">
                <img className="h-9 hover:bg-blue-600 duration-1000 rounded-full " src="Facebook.png"  alt="fb" />
                <span className="ml-3 text-sm normal-case text-gray-300 font-medium">Facebook</span>
              </a>  
              <a href="" button className="flex items-center p-1 rounded-full ">
                <img className="h-9 hover:bg-blue-400 duration-1000 rounded-full" src="Twitter.png" alt="tw" />
                <span className="ml-3 text-sm normal-case text-gray-300 font-medium">Twitter</span>
              </a>
              <a href="" button className="flex items-center p-1 rounded-full">
                <img className="h-9 hover:bg-pink-500 duration-1000 rounded-full" src="Instagram.png" alt="insta" />
                <span className="ml-3 text-sm normal-case text-gray-300 font-medium">Instagram</span>
              </a>
        </div>
    </div>

    
    <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div className="mt-2">
                © Copyright 2021 Döner Kebab.
            </div>
        </div>
    </div>
</footer>

</body>
  )
}
