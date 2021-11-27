import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section>
	    <div class="bg-yellow-400 text-white py-20">
		    <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			    <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				    <h1   h1 class="text-3xl md:text-5xl pb-2 text-blue-800 tracking-loose">Döner Kebab</h1>
				    <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Zamów jedzenie pod drzwi.

				    </h2>
				    <p class="text-sm md:text-base text-gray-50 mb-4">Załóż konto aby przeglądać i zamawiać swoje ulubione jedzenie.</p>
				    <a href="#"
					    class="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					    Zaczynajmy</a>
			        </div>
			    <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				    <div class="h-48 flex flex-wrap content-center">
                    
                        <div>
                            <img class="inline-block mt-28 hidden xl:block h-50 " src="PicStart.png" />
                        </div>
					</div>
				</div>
		    </div>
		</div>
    </section>
    )
}