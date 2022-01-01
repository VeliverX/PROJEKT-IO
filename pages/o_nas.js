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
            <h2 class="text-5xl font-bold text-indigo-200">Naszą wizją jest dać każdemu łatwy oraz szybki dostęp do ulubionych produktów!</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div class="w-full bg-gray-600 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded h-52" src="about.png" alt="produkt"></img>
                </div>
                <div class="text-center">
                    <h1 class="text-xl text-white font-bold mb-2">Jesteśmy Döner Kebab</h1>
                    <p class="text-base text-gray-300 font-normal">Portal, który pozwala zamawiać nalepsze posiłki z całej okolicy w zaledwie kilka minut.
                    Naszymi najważniejszymi zasadami są:
                    <ul>
                    <li class="text-base text-gray-100 font-bold">&#9830; szybki oraz łatwy sposób zamawiania,</li>
                    <li class="text-base text-gray-100 font-bold">&#9830; wybierać tylko najlepsze lokalne pordukty,</li>
                    <li class="text-base text-gray-100 font-bold">&#9830; stały kontakt z odbiorcami by stale się rozwijać.</li>
                    </ul>
                    Dzięki temu utrzymujemy najwyższy poziom jak i cały czas go podnosimy, by nasi klienci byli zadowoleni za każdym razem, gdy zamówią u nas posiłek!
                    </p>
                    
                </div>
            </div>
            <div class="w-full bg-gray-600 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover  h-52" src="user.png" alt="produkt"></img>
                    <span class="text-base text-gray-300 font-normal">Ponad 20 000 użytkowników.</span>
                </div>
                <div class="mb-8">
                    <img class="object-center object-cover  h-52" src="city.png" alt="produkt"></img>
                    <span class="text-base text-gray-300 font-normal">Działamy w 11 polskich miastach.</span>
                </div>
                
            </div>
        </div>
    </section>
</div>

<footer class="bg-gray-800 ">
<a href="" class="flex items-center justify-center pt-10 pb-14">
      <img class="h-10" src="Logo.png" alt="logo" />
      <span class="ml-3 text-sm normal-case font-medium text-gray-300 ">DÖNER KEBAB</span>
    </a>
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">   
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                PRZYDATNE LINKI
            </div>
            <Link href="aktualnoscis">
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
            <a L href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 hover:underline">
                Kontakt
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
  
    )}