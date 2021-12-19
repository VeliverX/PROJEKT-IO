import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
<section class="bg-gray-100 pt-32 pb-36">
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
  )
}