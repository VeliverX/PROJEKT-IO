import Link from 'next/link'
export default function Home() {
  return (


<section class="flex justify-center items-center h-screen bg-yellow-400">
<title>Zostań kurierem</title>
    <div class="max-w-md w-full bg-white rounded p-10  space-y-6">
        <div class="mb-4">
            <p class="flex justify-center text-gray-600 text-3xl font-medium	">Dołącz do nas! </p>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Imię"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Nazwisko"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="E-mail"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Telefon"></input>
        </div>
        <div>
            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Powiedz nam coś o sobie"></input>
        </div>
        <div>
            <button class="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200">Złóż podanie</button>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex flex-row items-center">
                <input type="checkbox" class="focus:ring-blue-500 h-6 w-6 text-blue-600 border-gray-300 rounded"></input>
                <label for="comments" class="ml-2 text-sm font-light text-gray-600">Zgadzam się na wykorzystywanie moich danych w przyszłych rekrutacjach i przechowywanie ich przez okres 12 miesięcy.</label>
            </div>
        </div>
        <div>
            <Link href="./">
            <button class="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200">Powrót</button>
            </Link>
        </div>
        </div>
        
</section>

  )
}