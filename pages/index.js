import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
    <section>
	    <div className="bg-yellow-400 text-white py-20">
		    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-52">
			    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				    <h1   h1 className="text-3xl md:text-5xl pb-2 text-blue-600 tracking-loose">Döner Kebab</h1>
				    <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Zamów jedzenie pod drzwi.

				    </h2>
				    <p className="text-sm md:text-base text-gray-50 mb-4">Załóż konto aby przeglądać i zamawiać swoje ulubione jedzenie.</p>
					<Link href="strona_glowna"> 
						<a className="duration-1000 bg-transparent hover:bg-white text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-6 border-2 border-white hover:border-transparent">Zaczynajmy</a>
					</Link>	
			        </div>
			    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				    <div className="h-48 flex flex-wrap content-center">
                    
                        <div>
                            <img className="inline-block mt-28 hidden xl:block h-50 " src="PicStart.png" />
                        </div>
					</div>
				</div>
		    </div>
		</div>
    </section>
    )
}