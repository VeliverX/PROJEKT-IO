import Link from 'next/link'
export default function Home() {
return (
    <body class="bg-gray-800 h-full md:h-screen" >
    <header class="bg-yellow-500  text-white shadow-lg hidden md:block">
      
  <div class="container mx-auto flex items-center h-24">
    <a href="" class="flex items-center justify-center">
      <img class="h-14" src="Logo.png" alt="logo" />
      <span class="ml-4 text-lg normal-case font-bold text-white">NASZE<br/>Produkty</span>
    </a>
    <nav class="contents font-semibold text-base lg:text-lg">
      <ul class="ml-auto flex items-center">
        <li class="p-5 xl:p-8">
        <Link href="./">
            Powrót
          </Link>
        </li>
      </ul>
    </nav>
  </div>
 
</header>
   
    <div class="bg-gray-800 h-full md:h-screen">
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
        <div class>
                    <img class="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div class="text-lg font-semibold"> 
              <p class="text-lg sm:text-xl">Kebab w bułce</p>
              <p class="text-yellow-900 text-base sm:text-lg">16 zł</p>
            </div>
            <div class="text-lg font-semibold"> 
             <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
        <div class>
        <img class="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div class="text-lg font-semibold"> 
              <p class="text-lg sm:text-xl">Rollo Kebab</p>
              <p class="text-yellow-900 text-base sm:text-lg">20 zł</p>
            </div>
            <div class="text-lg font-semibold"> 
             <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
        <div class>
        <img class="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div class="text-lg font-semibold"> 
              <p class="text-lg sm:text-xl">Kubełek Kebab</p>
              <p class="text-yellow-900 text-base sm:text-lg">25 zł</p>
            </div>
            <div class="text-lg font-semibold"> 
             <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
        <div class>
        <img class="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div class="text-lg font-semibold"> 
              <p class="text-lg sm:text-xl">Rollo Amerykańskie</p>
              <p class="text-yellow-900 text-base sm:text-lg">17 zł</p>
            </div>
            <div class="text-lg font-semibold"> 
             <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
        <div class>
        <img class="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div class="text-lg font-semibold"> 
              <p class="text-lg sm:text-xl">Frytki</p>
              <p class="text-yellow-900 text-base sm:text-lg">6 zł</p>
            </div>
            <div class="text-lg font-semibold"> 
             <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-left">
        <div class>
        <img class="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div class="text-lg font-semibold"> 
              <p class="text-lg sm:text-xl">Sałatka Kebab</p>
              <p class="text-yellow-900 text-base sm:text-lg">21 zł</p>
            </div>
            <div class="text-lg font-semibold"> 
             <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>   
    </div>
    <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
  
          <div class="flex justify-between border-b-2 mb-2">
                <div class="text-lg py-2"> 
                  <p> Kebab w bułce</p>
                </div>
                 <div class="text-lg py-2"> 
                 <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
        
          <div class="flex justify-between border-b-2 mb-2">
                <div class="text-lg py-2"> 
                  <p>Rollo Kebab</p>
                </div>
                 <div class="text-lg py-2"> 
                 <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          

       
          <div class="flex justify-between border-b-2 mb-2">
                <div class="text-lg py-2"> 
                  <p>Kubełek Kebab</p>
                </div>
                 <div class="text-lg py-2"> 
                 <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          <div class="flex justify-between border-b-2 mb-2">
                <div class="text-lg py-2"> 
                  <p>Roll Amerykańskie</p>
                </div>
                 <div class="text-lg py-2"> 
                 <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          <div class="flex justify-between border-b-2 mb-2">
                <div class="text-lg py-2"> 
                  <p>Frytki</p>
                </div>
                 <div class="text-lg py-2"> 
                 <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          <div class="flex justify-between border-b-2 mb-2">
                <div class="text-lg py-2"> 
                  <p>Sałatka Kebab</p>
                </div>
                 <div class="text-lg py-2"> 
                 <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button class="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
         
          
          <div class="flex justify-center items-center text-center">
                <div class="text-xl font-semibold"> 
                  <p>Total Item</p>
                  <p class="text-5xl">0</p>
                </div>
          </div>
         
          
      </div>
       <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        
          <div class="flex justify-center items-center text-center">
            <div class="text-xl font-semibold"> 
                <p>Total Price</p>
                <p class="text-5xl">0</p>
            </div>
          </div>
        
       </div>
    </div>
  </div>
</div>

</body>
)
}