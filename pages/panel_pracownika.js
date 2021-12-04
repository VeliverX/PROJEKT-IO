import Link from 'next/link'
export default function Home() {
    return (
<div class="h-screen w-full flex overflow-hidden">
	<nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
	

		<div class="flex flex-row border-b items-center justify-between pb-2">
		
			<span class="text-lg font-semibold capitalize dark:text-gray-300">
				Panel Pracownika
			</span>
		</div>

		<div class="mt-8">
			
			<img
				class="h-10 w-14"
				src="Logo_czarne.png"
				alt="enoshima profile" />
			<h2
				class="mt-4 text-xl dark:text-gray-300 font-extrabold capitalize">
				Hello Enoshima
			</h2>
			<span class="text-sm dark:text-gray-300">
				<span class="font-semibold text-green-600 dark:text-green-300">
					Pracownik:
				</span>
				Id:###
			</span>
		</div>
		<div class="mt-auto flex items-center text-red-700 dark:text-red-400">
			<Link href="./">
			<a class="flex items-center">
				<svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
					<path
						d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"></path>
				</svg>
				<span class="ml-2 capitalize font-medium">log out</span>
			</a>
            </Link>
		</div>
	</nav>
	<main class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition duration-500 ease-in-out overflow-y-auto">
		<div class="mx-10 my-2">
			<nav
				class="flex flex-row justify-between border-b
				dark:border-gray-600 dark:text-gray-400 transition duration-500
				ease-in-out">
				<div class="flex">
					

					<a	class="py-2 block text-green-500 border-green-500 dark:text-green-200 dark:border-green-200 focus:outline-none border-b-2 font-medium capitalize
						transition duration-500 ease-in-out">
						Zamówienia
					</a>
					
				</div>
			</nav>
			<h2 class="my-4 text-4xl font-semibold dark:text-gray-400">
				Aktualne Zamówienia
			</h2>
			<div
				class="pb-2 flex items-center justify-between text-gray-600
				dark:text-gray-400 border-b dark:border-gray-600">
			

				<div>
					<span>
						<span class="text-green-500 dark:text-green-200">
							###
						</span>
						ilość zamówień
					</span>
					
				</div>
				

			</div>
			<div
				class="mt-6 flex justify-between text-gray-600 dark:text-gray-400">
				

				<div class="ml-10 pl-2 flex capitalize">
					
					<span class="ml-8 flex items-center">
						Potrawy
						<svg
							class="ml-1 h-5 w-5 fill-current 
							dark:text-green-200"
							viewBox="0 0 24 24">
							<path
								d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
						</svg>
					</span>
					<span class="ml-24 flex items-center">
						Adres
						<svg
							class="ml-1 h-5 w-5 fill-current"
							viewBox="0 0 24 24">
							<path
								d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
						</svg>
					</span>
				</div>

				<div class="mr-12 flex capitalize">
					

					

					<span class="mr-16 pr-2 flex items-center">
						Godzina Zamówienia
						<svg
							class="ml-1 h-5 w-5 fill-current"
							viewBox="0 0 24 24">
							<path
								d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
						</svg>
					</span>

					<span class="mr-12 flex items-center">
						Status
						<svg
							class="ml-1 h-5 w-5 fill-current"
							viewBox="0 0 24 24">
							<path
								d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"></path>
						</svg>
					</span>	
				</div>
			</div>
			<div class="mt-8 mb-4 flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
				<div class="flex justify-between">
					<img
						class="h-12 w-12 rounded-full object-cover"
						src="kebab.png"
						alt="" />
					<div
						class="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>Potrawy</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Kebab w bułce 1
						</span>
					</div>

					<div
						class="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>Adres</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Kęty ul. św. M. M. Kolbego 36B
						</span>
					</div>
				</div>
				<div class="flex">
					<div
						class="mr-36 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>Godzina</span>
						<span class="mt-2 pl-2 text-black dark:text-gray-200">
							16.39
						</span>
					</div>

					<div
						class="mr-20 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span class="pl-2">status</span>
						<span class="mt-2 text-yellow-800 dark:text-yellow-400">
							W trakcie
						</span>
					</div>
				</div>

			</div>

		</div>

	</main>

</div>
    )}