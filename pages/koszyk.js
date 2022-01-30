import Link from 'next/link'
export default function Home() {
return (
    <body className="bg-gray-800 h-full md:h-screen" >
    <header className="bg-yellow-400  text-white shadow-lg hidden md:block">
      
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
        <li className="p-5 xl:p-8">
        <Link href="strona_glowna">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="40" 
        height="40" 
        fill="currentColor" 
        className="bi bi-box-arrow-right" 
        viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
 
</header>
   
    <div className="bg-gray-800 h-full md:h-screen">
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
        <div >
                    <img className="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div className="text-lg font-semibold"> 
              <p className="text-lg sm:text-xl">Kebab w bułce</p>
              <p className="text-yellow-900 text-base sm:text-lg">16 zł</p>
            </div>
            <div className="text-lg font-semibold"> 
             <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
        <div >
        <img className="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div className="text-lg font-semibold"> 
              <p className="text-lg sm:text-xl">Rollo Kebab</p>
              <p className="text-yellow-900 text-base sm:text-lg">20 zł</p>
            </div>
            <div className="text-lg font-semibold"> 
             <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
        <div >
        <img className="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div className="text-lg font-semibold"> 
              <p className="text-lg sm:text-xl">Kubełek Kebab</p>
              <p className="text-yellow-900 text-base sm:text-lg">25 zł</p>
            </div>
            <div className="text-lg font-semibold"> 
             <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
        <div >
        <img className="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div className="text-lg font-semibold"> 
              <p className="text-lg sm:text-xl">Rollo Amerykańskie</p>
              <p className="text-yellow-900 text-base sm:text-lg">17 zł</p>
            </div>
            <div className="text-lg font-semibold"> 
             <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
        <div >
        <img className="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div className="text-lg font-semibold"> 
              <p className="text-lg sm:text-xl">Frytki</p>
              <p className="text-yellow-900 text-base sm:text-lg">6 zł</p>
            </div>
            <div className="text-lg font-semibold"> 
             <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-left">
        <div >
        <img className="object-ce object-cover rounded-full h-16 w-16 sm:ml-2 sm:h-28 sm:w-28 " src="kebab.png" alt="produkt"></img>
                </div>
            <div className="text-lg font-semibold"> 
              <p className="text-lg sm:text-xl">Sałatka Kebab</p>
              <p className="text-yellow-900 text-base sm:text-lg">21 zł</p>
            </div>
            <div className="text-lg font-semibold"> 
             <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
            </div>
        </div>
      </div>   
    </div>
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
  
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p> Kebab w bułce</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
        
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Rollo Kebab</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          

       
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Kubełek Kebab</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Roll Amerykańskie</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Frytki</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
          <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2"> 
                  <p>Sałatka Kebab</p>
                </div>
                 <div className="text-lg py-2"> 
                 <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </button>
                      <p> 0 </p>
                      <button className="focus:outline-none bg-yellow-800 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                  </div>
                </div>
          </div>
         
          
          <div className="flex justify-center items-center text-center">
                <div className="text-xl font-semibold"> 
                  <p>Ilość</p>
                  <p className="text-5xl">0</p>
                </div>
          </div>
         
          
      </div>
       <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
        
          <div className="flex justify-center items-center text-center">
            <div className="text-xl font-semibold"> 
                <p>Suma do zapłaty</p>
                <p className="text-5xl">0</p>
            </div>
          </div>
        
       </div>
    </div>
  </div>
</div>

</body>
)
}