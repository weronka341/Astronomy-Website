let delay = 700;
let i = 0;

function postParagraph() {
    if(i < description.length) {
        postMessage(description[i]);
        i = i + 1;
        delay += 500;
        setTimeout("postParagraph()", delay);
    }
}

const description = [

    'Wszechświat, uniwersum – wszystko, co fizycznie istnieje: cała przestrzeń, czas, prawa fizyki, stałe fizyczne oraz wszystkie formy energii i materii. Większość materii i energii znajdującej się we Wszechświecie przybiera formę ciemnej materii i ciemnej energii. Słowo „Wszechświat” może być też używane w innych kontekstach jako synonim słów „kosmos” (w rozumieniu filozofii), „świat” czy „natura”. W naukach ścisłych słowa „Wszechświat” i „kosmos” są równoważne.',

    'Według powszechnie przyjętych teorii potwierdzonych przez różne dane obserwacyjne wiek Wszechświata wynosi 13,82 miliarda lat. Średnica widzialnego Wszechświata (przy przyjęciu pojęcia współrzędnych współporuszających się) to ok. 91–93 miliardów lat świetlnych (ok. 28 miliardów parseków), czyli 8,8×1026 metrów. Nie da się określić rozmiarów całego Wszechświata – możliwe, że jest nieskończony.',

    'Zgodnie ze współczesną wiedzą Wszechświat powstał z osobliwości (punktu, w którym była skupiona cała jego materia i energia) w Wielkim Wybuchu. Od tego momentu Wszechświat powiększył się do obecnej postaci, prawdopodobnie przechodząc przez krótki okres kosmologicznej inflacji, która spowodowała, że jego gęstość jest równa gęstości krytycznej. ',

    'Teoria Wielkiego Wybuchu jest dominującym modelem kosmologicznym opisującym rozwój Wszechświata, potwierdzonym przez różne niezależne obserwacje. Podczas Wielkiego Wybuchu powstał czas oraz przestrzeń wypełniona określoną ilością energii i materii; kiedy przestrzeń się rozszerza, zmniejszeniu ulega gęstość znajdującej się w niej energii i materii. Po początkowej fazie ekspansji Wszechświat ochłodził się wystarczająco, żeby umożliwić uformowanie się cząstek subatomowych oraz prostych atomów. Przez oddziaływanie grawitacji gigantyczne chmury tych elementów połączyły się, tworząc gwiazdy.',

    'Według współczesnej wiedzy prawa fizyki i stałe fizyczne decydujące o ewolucji Wszechświata nie zmieniały się przez cały czas jego istnienia. Dominującą siłą na odległościach kosmologicznych jest grawitacja. Pozostałe siły: elektromagnetyzm, oddziaływanie silne i oddziaływanie słabe mają dominujące znaczenie w małych odległościach. Wszechświat ma trzy obserwowalne wymiary przestrzenne i jeden czasowy, choć niewykluczone, że ma więcej wymiarów zwiniętych do mikroskopijnych wielkości. Czasoprzestrzeń jest gładką i spójną rozmaitością, a jej średnia krzywizna jest bardzo mała, co oznacza, że w dużej skali jej geometria jest w przybliżeniu euklidesowa.',

    'Z powyższej definicji Wszechświata wynika, że nic nie może istnieć poza nim. Istnieją jednak alternatywne definicje, dopuszczające że nasz „Wszechświat” jest jednym z wielu „Wszechświatów”, których zbiór określa się jako wieloświat. Przykładowo teoria chaotycznej inflacji dopuszcza istnienie nieskończenie wielu Wszechświatów różniących się obowiązującymi w nich stałymi fizycznymi. Wieloświatowa interpretacja mechaniki kwantowej mówi natomiast, że każdy pomiar kwantowego układu w superpozycji powoduje powstanie osobnego Wszechświata dla każdego wyniku pomiaru. Ponieważ z definicji takie Wszechświaty są rozłączne z naszym, tych spekulacji nie da się przetestować eksperymentalnie.',

    'Istnieje wiele konkurujących ze sobą hipotez na temat ostatecznego losu Wszechświata. Fizycy i filozofowie nie wiedzą, co, i czy cokolwiek poprzedziło Wielki Wybuch. Wielu z nich odmawia spekulacji na ten temat i wątpi w to, że kiedykolwiek takie informacje będą dostępne.'
]

postParagraph();
