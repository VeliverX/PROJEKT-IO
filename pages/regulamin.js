import styles from 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {Fragment} from 'react'

export default function Home() {
  return (
      <body class="bg-yellow-400">
          <title>Regulamin</title>
    <section class="flex justify-center items-center h-auto">
    <div class="max-w-screen-xl w-full bg-white rounded-2xl p-10  space-y-6">
        <h1 class="flex justify-center text-gray-600 text-3xl font-medium">REGULAMIN DONERKEBAB:</h1>
        <div>
        <h1 class="flex justify-center text-gray-600 font-medium">Zastosowanie i Postanowienia Ogólne</h1>
        <p1 class="text-sm">1. Niniejsze Ogólne warunki świadczenia usług dla Konsumentów [dalej: OWU] mają zastosowanie wyłącznie do Usług świadczonych przez Spółkę, za które to ponosi ona pełną odpowiedzialność. Spółka informuje, iż korzystanie z Platformy przez Konsumentów jest usługą świadczoną drogą elektroniczną, w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. z 2002 r., Nr 144, poz. 1204, z późn. zm.) [dalej: u.ś.u.e], które to odbywa się podstawie niniejszych OWU, pełniących również rolę Regulaminu w rozumieniu 8 u.ś.u.e. Niniejsze OWU określają w szczególności zasady świadczenia Usług oferowanych na Platformie, ich zakres oraz zasady korzystania z nich. Spółka nie odpowiada natomiast za prawidłowe wykonanie Umowy, nie jest bowiem jej stroną.</p1>
        </div>
        <div>
        <p1 class="text-sm">2. Usługi świadczone przez Spółkę na rzecz Konsumentów, a wchodzące w zakres niniejszych OWU mają, w stosunku do nich charakter bezpłatny.</p1>
        </div>
        <div>
        <p1 class="text-sm">3. Spółka nieodpłatnie udostępnia Konsumentom niniejsze OWU za pośrednictwem Platformy w systemie teleinformatycznym, a także w sposób umożliwiający jego pobranie, odtworzenie, utrwalenie i wydrukowanie.</p1>
        </div>
        <div>
            <h1 class="flex justify-center text-gray-600 font-medium">Zasady Świadczenia Usług Drogą Elektroniczną</h1>
        <p1 class="text-sm">4. Rozpoczęcie świadczenia Usług przez Spółkę, następuje z chwilą rozpoczęcia korzystania przez Konsumenta z Platformy, a co za tym idzie akceptacją warunków niniejszych OWU. Świadczenie Usług przez Spółkę na rzecz Konsumenta nie jest ograniczone w czasie.</p1>
        </div>
        <div>
        <p1 class="text-sm">5. Konsumenci mają możliwość zarejestrowania się na Platformie – utworzenia Konta na skutek podania w formularzu rejestracyjnym dostępnym na stronie internetowej: www.pyszne.pl w zakładce „Rejestracja” swojego imienia, nazwiska, adresu poczty elektronicznej oraz hasła. Do aktywacji Konta niezbędnym jest kliknięcie przez Konsumenta w link aktywacyjny przesyłany niezwłocznie na podany przez niego adres e-mail. Utworzenie Konta może się również odbyć poprzez wybranie odpowiedniej opcji podczas składania zamówienia lub połączenie Platformy z aplikacją Facebook.com. Konsument może zrezygnować ze świadczonych Usług w każdym czasie.</p1>
        </div>
        <div>
        <p1 class="text-sm">6. Spółka ma prawo do natychmiastowego usunięcia Konta danego Konsumenta, w sytuacji rażącego naruszania przez niego postanowień niniejszych OWU, w tym w szczególności: umyślnego wystawiania niezgodnych z prawdą ocen poszczególnych Restauracji, dostarczania treści o charakterze bezprawnym, o których mowa w ust. 9 czy też podania nieprawdziwych/fałszywych danych podczas procesu rejestracyjnego - jeżeli nie zaprzestaje on przedmiotowego działania pomimo wyznaczonego przez Spółkę w tym zakresie terminu - nie krótszego niż 7 dni.</p1>
        </div>
        <div>
        <p1 class="text-sm">7. Spółka nie ponosi odpowiedzialności za niemożność świadczenia Usług na rzecz Konsumenta na skutek działania siły wyższej.</p1>
        </div>
        <div>
        <p1 class="text-sm">8. W ramach korzystania z Usług niedozwolone jest dostarczanie przez Konsumenta treści o charakterze bezprawnym, w tym w szczególności:</p1>
        <ul class="text-xs">
            <li>&#9830; danych i informacji spreparowanych w sposób stwarzający ryzyko naruszenia bezpieczeństwa systemu informatycznego lub stabilności Platformy;</li>
            <li>&#9830; informacji naruszających jakiekolwiek dobra Spółki lub osób trzecich;</li>
            <li>&#9830; nnych danych i informacji naruszających bezwzględnie obowiązujące przepisy prawa, w tym w szczególności treści pornograficznych, odwołujących się do rasizmu, nacjonalizmu, faszyzmu, czy też propagujących przemoc.</li>
        </ul>
        </div>
        <div>
        <p1 class="text-sm">9. Korzystając z Platformy Konsumenci mają obowiązek postępować zgodnie z powszechnie obowiązującymi przepisami prawnymi oraz zasadami współżycia społecznego.</p1>
        </div>
        <div>
        <p1 class="text-sm">10. Zakazane jest wykorzystywanie przez Konsumentów Usług w sposób sprzeczny z powszechnie obowiązującymi przepisami prawnymi, dobrymi obyczajami lub w sposób naruszający uzasadnione interesy Spółki. W szczególności Konsument nie będzie podejmował czynności, które mogłyby narazić Spółkę na jakąkolwiek szkodę majątkową.</p1>
        </div>
        <div>
        <p1 class="text-sm">11. Zabronione jest pobieranie przez Konsumentów zawartości baz danych udostępnionych na Platformie i wtórne ich wykorzystywanie w całości lub w istotnej części co do jakości lub ilości.</p1>
        </div>
        <div>
        <p1 class="text-sm">12. Spółka zastrzega, iż wszystkie wiadomości i materiały dostępne na Platformie są objęte ochroną prawa autorskiego. Konsument ma prawo do korzystania z nich jedynie w ramach dozwolonego użytku osobistego. Kopiowanie, zwielokrotnianie, rozpowszechnianie w Internecie i inne formy korzystania z materiałów i wiadomości umieszczonych na Platformie wykraczające poza granice dozwolone prawem jest zabronione.</p1>
        </div>
        <div>
            <Link href="./">
            <button class="w-full py-4 bg-yellow-400 bg-opacity-100 hover:bg-yellow-600 rounded text-sm font-bold text-gray-50 transition duration-200">Powrót</button>
            </Link>
        </div>
        
        
    </div>
</section>
</body>
  )
}