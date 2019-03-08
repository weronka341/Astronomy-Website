//Planets names resizing and their models highlighting on mouseover/mouseout
let planetsNames = document.querySelector('.planets-headers').getElementsByTagName('a');
[].forEach.call(planetsNames, planet => planet.addEventListener('mouseover', highlightPlanet));
[].forEach.call(planetsNames, planet => planet.addEventListener('mouseout', unhighlightPlanet));
[].forEach.call(planetsNames, planet => planet.addEventListener('click', showPlanetInfo));

function highlightPlanet(currentPlanet) {

    let planetID = currentPlanet.target.id;
    document.getElementById(planetID).style.fontSize = "5vh";
    styleSheet = document.styleSheets[1];
    let newCSSRule = '';

    if(planetID == 'sun-header')
        newCSSRule = '#' + planetID.replace('-header', '') + '{box-shadow: 0px 0px 101px 58px rgba(255,207,74,0.7);}';
    else
        newCSSRule = '#' + planetID.replace('-header', ':before') + '{box-shadow: 0 0 10px 2px white, 0 0 22px 11px white;}';
    
    styleSheet.insertRule(newCSSRule, styleSheet.cssRules.length);
}

function unhighlightPlanet(currentPlanet) {

    let planetID = currentPlanet.target.id;
    document.getElementById(planetID).style.fontSize = "4vh";
    styleSheet = document.styleSheets[1];
    let newCSSRule = '';

    if(planetID == 'sun-header')
        newCSSRule = '#' + planetID.replace('-header', '') + '{box-shadow: none}';
    else
        newCSSRule = '#' + planetID.replace('-header', ':before') + '{box-shadow: none;}';
    
    styleSheet.insertRule(newCSSRule, styleSheet.cssRules.length);
}

//Displaing pop up info about choosen planet
let planetsInfo = document.getElementById('planets-info');
let span = document.getElementsByClassName('close')[0];
span.addEventListener('click', closePopUp);

function showPlanetInfo(event) {

    event.preventDefault();
    let planetID = event.target.id;
    let planetDescription = document.getElementById('planet-description');
    let planetHeader = document.getElementById('choosen-planet-header');
    let planetImage = document.getElementById('planet-image');

    switch(planetID) {
        case 'sun-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Słońce</h1>";
            planetImage.innerHTML = "<img src=\"http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2714.png\" width=\"200px\" height=\"200px\">";
            planetDescription.innerHTML = sunDescription; 
            break;
        case 'mercury-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Merkury</h1>";
            planetImage.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b9/3D_Mercury.png\" width=\"200px\" height=\"200px\">";
            planetDescription.innerHTML = mercuryDescription; 
            break;
        case 'venus-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Wenus</h1>";
            planetImage.innerHTML = "<img src=\"https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png\" width=\"270px\" height=\"200px\">";
            planetDescription.innerHTML = venusDescription; 
            break;
        case 'earth-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Ziemia</h1>";
            planetImage.innerHTML = "<img src=\"http://pngimg.com/uploads/earth/earth_PNG39.png\" width=\"200px\" height=\"200px\">";
            planetDescription.innerHTML = earthDescription; 
            break;
        case 'mars-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Mars</h1>";
            planetImage.innerHTML = "<img src=\"http://www.stickpng.com/assets/images/580b585b2edbce24c47b2708.png\" width=\"200px\" height=\"200px\">";
            planetDescription.innerHTML = marsDescription; 
            break;
        case 'jupiter-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Jowisz</h1>";
            planetImage.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/68/Jupiter.png\" width=\"200px\" height=\"200px\">";
            planetDescription.innerHTML = jupiterDescription; 
            break;  
        case 'saturn-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Saturn</h1>";
            planetImage.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/4/43/Saturnx.png\" width=\"230px\" height=\"150px\">";
            planetDescription.innerHTML = saturnDescription; 
            break;   
        case 'uranus-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Uran</h1>";
            planetImage.innerHTML = "<img src=\"https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png\" width=\"270px\" height=\"200px\">";
            planetDescription.innerHTML = uranusDescription; 
            break;    
        case 'neptune-header':
            planetHeader.innerHTML = "<h1 class=\"white-glowing-text\">Neptun</h1>";
            planetImage.innerHTML = "<img src=\"https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png\" width=\"270px\" height=\"200px\">";
            planetDescription.innerHTML = neptuneDescription; 
            break;   
    }

    planetsInfo.style.display = "block";
}

function closePopUp() {

   planetsInfo.style.display = "none";
}

//Planets description from Wikipedia
const sunDescription = "<p>Gwiazda centralna Układu Słonecznego, wokół której krąży Ziemia, inne planety tego układu, planety karłowate oraz małe ciała Układu Słonecznego. Słońce składa się z gorącej plazmy utrzymywanej przez grawitację i kształtowanej przez pole magnetyczne. Jest prawie idealnie kuliste, ma średnicę około 1 392 684 km (109 razy większą niż Ziemia), a jego masa - 1,989 ×1030 kg (około 333 tysięcy razy większa niż masa Ziemi) stanowi około 99,86% całkowitej masy Układu Słonecznego. Około trzy czwarte masy Słońca stanowi wodór, resztę głównie hel. Pozostałe 1,69% tworzą cięższe pierwiastki, w tym m.in. tlen, węgiel, neon i żelazo.</p><p> Słońce uformowało się około 4,567 mld lat temu na skutek kolapsu grawitacyjnego obszaru w dużym obłoku molekularnym. Większość materii zgromadziła się w centrum, a reszta utworzyła orbitujący wokół niego, spłaszczony dysk, z którego ukształtowała się pozostała część Układu Słonecznego. Centralna część stawała się coraz gęstsza i gorętsza, aż w jej wnętrzu zainicjowana została synteza termojądrowa. Słońce należy do tzw. żółtych karłów ciągu głównego; widziane z Ziemi ma barwę białą.</p>";           
const mercuryDescription = "<p>Najmniejsza i najbliższa Słońcu planeta Układu Słonecznego. Jako planeta wewnętrzna znajduje się dla ziemskiego obserwatora zawsze bardzo blisko Słońca, dlatego jest trudna do obserwacji. Mimo to należy do planet widocznych gołym okiem i była znana już w starożytności. Merkurego dojrzeć można jedynie tuż przed wschodem lub tuż po zachodzie Słońca.</p><p>Ukształtowanie powierzchni Merkurego przypomina Księżyc: są na nim liczne kratery uderzeniowe i praktycznie pozbawiony jest atmosfery. Temperatura powierzchni waha się od −183 °C do 427 °C. W przeciwieństwie do Księżyca, planeta ma jednak duże żelazne jądro, generujące pole magnetyczne o natężeniu stukrotnie mniejszym od natężenia ziemskiego pola magnetycznego. Wielkość jądra powoduje, że Merkury ma jedną z największych gęstości spośród planet Układu Słonecznego (nieznacznie większą ma Ziemia). Merkury nie ma naturalnych satelitów.</p>";
const venusDescription = "<p>Druga pod względem odległości od Słońca planeta Układu Słonecznego. Jest trzecim pod względem jasności ciałem niebieskim widocznym na niebie, po Słońcu i Księżycu. Jej obserwowana wielkość gwiazdowa sięga −4,6m i jest wystarczająca, aby światło odbite od Wenus powodowało powstawanie cieni. Odległość Wenus od Ziemi zmienia się w zakresie od około 40 mln km do około 259 mln km.</p><p>Nazwa planety wzięła się od rzymskiej bogini miłości, Wenus. Na niebie planeta jest widoczna tylko przez około trzy godziny przed wschodem Słońca nad wschodnim horyzontem lub po zachodzie Słońca nad zachodnim horyzontem. Nazywana jest także Gwiazdą Poranną (Zaranną, Porankową) lub Jutrzenką (łac. Stella Matutina), kiedy zwiastuje wschód Słońca, albo Gwiazdą Wieczorną, która finalizuje jego zachód.</p><p>Wenus jest klasyfikowana jako planeta skalista (inaczej: typu ziemskiego) i jest czasami nazywana „planetą bliźniaczą” albo „siostrą Ziemi” – ze względu na podobną wielkość, masę i skład chemiczny. Ma najgęstszą atmosferę ze wszystkich planet skalistych w Układzie Słonecznym, składającą się głównie z dwutlenku węgla.</p>";
const earthDescription = "<p>Trzecia, licząc od Słońca, oraz piąta pod względem wielkości planeta Układu Słonecznego. Pod względem średnicy, masy i gęstości jest to największa planeta skalista Układu Słonecznego. Ziemia jest zamieszkana przez miliony gatunków, w tym przez człowieka. Jest jedynym znanym miejscem we Wszechświecie, w którym występuje życie. Według danych zebranych metodą datowania izotopowego, planeta uformowała się ok. 4,54 ± 0,05 mld lat temu.</p><p>W ciągu pierwszego miliarda lat po uformowaniu się Ziemi wewnątrz jej oceanów pojawiło się życie. Z żyjących na Ziemi organizmów żywych składa się biosfera, która wpływa na jej atmosferę, hydrosferę, litosferę i inne czynniki abiotyczne planety, umożliwiając rozwój i wzrost liczby organizmów aerobowych i anaerobowych oraz powstanie ozonosfery. Rozwój życia na lądzie i w wodzie umożliwiła powłoka ozonowa oraz ziemskie pole magnetyczne, zmniejszając natężenie promieniowania ultrafioletowego, oraz magnetosfera, odbijająca cząstki wiatru słonecznego i promieniowania kosmicznego. Dystans dzielący Słońce od Ziemi, jej właściwości fizyczne oraz jej historia geologiczna są najważniejszymi czynnikami, które pozwoliły organizmom żyć i ewoluować. Różnorodność biologiczna Ziemi nieustannie powiększa się, chociaż w dziejach życia Ziemi proces ten był kilkukrotnie przerywany, kiedy miało miejsce masowe wymieranie gatunków. Pomimo że naukowcy szacują, że ok. 99% gatunków organizmów żywych (ok. 5 mld) kiedykolwiek zamieszkujących Ziemię uważa się za wymarłe, wciąż mieszka na niej ok. 10–14 mln gatunków, z czego 1,2 mln zostało udokumentowanych.</p>";
const marsDescription = "<p>Czwarta, według oddalenia od Słońca, planeta Układu Słonecznego. Nazwa planety pochodzi od imienia rzymskiego boga wojny – Marsa. Zawdzięcza ją swej barwie, która przy obserwacji z Ziemi wydaje się rdzawo-czerwona i kojarzyła się starożytnym rzymianom z pożogą wojenną. Postrzegany odcień wynika stąd, że powierzchnia planety zawiera tlenki żelaza. Mars jest planetą wewnętrzną z cienką atmosferą, o powierzchni usianej kraterami uderzeniowymi, podobnie jak powierzchnia Księżyca i wielu innych ciał w Układzie Słonecznym. Występują tu różne rodzaje terenu, podobne do ziemskich: wulkany, doliny, pustynie i polarne czapy lodowe. Okres obrotu wokół własnej osi jest niewiele dłuższy niż Ziemi i wynosi 24,6229 godziny (24 h 37 min 22s). Na Marsie znajduje się najwyższa góra w Układzie Słonecznym – Olympus Mons i największy kanion – Valles Marineris. Gładki obszar równinny Vastitas Borealis na półkuli północnej obejmuje 40% powierzchni planety i może być pozostałością ogromnego uderzenia. W przeciwieństwie do Ziemi, Mars jest geologicznie i tektonicznie nieaktywny.</p>";
const jupiterDescription = "<p>Piąta w kolejności oddalenia od Słońca i największa planeta Układu Słonecznego. Jego masa jest nieco mniejsza niż jedna tysięczna masy Słońca, a zarazem dwa i pół razy większa niż łączna masa wszystkich innych planet w Układzie Słonecznym. Wraz z Saturnem, tworzą grupę gazowych olbrzymów, nazywaną czasem również planetami jowiszowymi.</p><p>Planetę znali astronomowie w czasach starożytnych, była związana z mitologią i wierzeniami religijnymi wielu kultur. Rzymianie nazwali planetę na cześć najważniejszego bóstwa swojej mitologii – Jowisza. Jest to trzeci co do jasności naturalny obiekt na nocnym niebie po Księżycu i Wenus (okresowo, w momencie wielkiej opozycji, jasnością może mu dorównywać Mars).</p><p>Największa planeta Układu Słonecznego składa się w trzech czwartych z wodoru i w jednej czwartej z helu; może posiadać także skaliste jądro złożone z cięższych pierwiastków. Ze względu na szybką rotację przybiera kształt spłaszczonej elipsoidy obrotowej (ma niewielkie, ale zauważalne zgrubienie w płaszczyźnie równika). Powierzchnię planety, którą stanowią nieprzezroczyste wyższe warstwy atmosfery, pokrywa kilka warstw chmur, układających się w charakterystyczne pasy widoczne z Ziemi. Wokół planety istnieją słabo widoczne pierścienie i potężna magnetosfera. Ma 79 znanych księżyców.</p>";
var saturnDescription = "<p>Gazowy olbrzym, szósta planeta Układu Słonecznego pod względem odległości od Słońca, druga po Jowiszu pod względem masy i wielkości. Charakterystyczną jego cechą są pierścienie, składające się głównie z lodu i w mniejszej ilości z odłamków skalnych; inne planety-olbrzymy także mają systemy pierścieni, ale żaden z nich nie jest tak rozległy ani tak jasny. Według danych z marca 2015 roku znane są 62 naturalne satelity Saturna.</p><p>Promień Saturna jest około 9 razy większy od promienia Ziemi. Chociaż jego gęstość to tylko jedna ósma średniej gęstości Ziemi, ze względu na wielokrotnie większą objętość masa Saturna jest dziewięćdziesiąt pięć razy większa niż masa Ziemi.</p><p>We wnętrzu Saturna panują ciśnienie i temperatura, których nie udało się dotąd uzyskać w laboratoriach na Ziemi. Wnętrze gazowego olbrzyma najprawdopodobniej składa się z jądra z żelaza, niklu, krzemu i tlenu, otoczonego warstwą metalicznego wodoru, warstwy pośredniej ciekłego wodoru i ciekłego helu oraz zewnętrznej warstwy gazowej. Prąd elektryczny w warstwie metalicznej wodoru generuje pole magnetyczne Saturna, które jest nieco słabsze niż pole magnetyczne Ziemi i ma około jedną dwudziestą natężenia pola wokół Jowisza. Zewnętrzna warstwa atmosfery wydaje się na ogół spokojna, choć mogą się na niej utrzymywać długotrwałe układy burzowe. Na Saturnie wieją wiatry o prędkości ok. 1800 km/h;</p>";
const uranusDescription = "<p>Gazowy olbrzym, siódma w kolejności od Słońca planeta Układu Słonecznego. Jest także trzecią pod względem wielkości i czwartą pod względem masy planetą naszego systemu. Nazwa planety pochodzi od Uranosa, który był bogiem i uosobieniem nieba w mitologii greckiej, ojcem Kronosa (Saturna) i dziadkiem Zeusa (Jowisza). Choć jest widoczny gołym okiem podobnie jak pięć innych planet, umknął uwadze starożytnych obserwatorów ze względu na niską jasność i powolny ruch po sferze niebieskiej. <p>Uran budową i składem chemicznym przypomina Neptuna, a obie planety mają odmienną budowę i skład niż większe gazowe olbrzymy: Jowisz i Saturn. Astronomowie czasem umieszczają je w oddzielnej kategorii „lodowych olbrzymów”. Atmosfera Urana, chociaż – podobnie jak atmosfery Jowisza i Saturna – składa się głównie z wodoru i helu, zawiera więcej zamrożonych substancji lotnych (tzw. lodów) niż atmosfery większych planet-olbrzymów; są to substancje takie jak woda, amoniak i metan, oraz śladowe ilości węglowodorów. Jego atmosfera jest najzimniejszą atmosferą planetarną w Układzie Słonecznym; minimalna temperatura to 49 K (−224 °C). Ma ona złożoną, warstwową strukturę. Uważa się, że jej najniższe chmury tworzy woda, a najwyższa warstwa chmur jest utworzona z kryształków metanu. Z kolei wnętrze Urana składa się głównie z lodów i skał. </p>";
const neptuneDescription = "<p>Gazowy olbrzym, ósma, najdalsza od Słońca planeta w Układzie Słonecznym. Nazwa planety pochodzi od rzymskiego boga mórz Neptuna. Wśród planet Układu Słonecznego jest czwartą pod względem średnicy i trzecią pod względem masy. Neptun jest ponad 17 razy masywniejszy od Ziemi i trochę masywniejszy od swojego bliźniaka, Urana. Krąży wokół Słońca w odległości około 30 razy większej niż dystans Ziemia-Słońce. Jego symbol astronomiczny to Neptune, stylizowana wersja trójzębu Neptuna.</p><p>Odkryty 23 września 1846 Neptun jest jedyną planetą Układu Słonecznego, której istnienie wykazano nie na podstawie obserwacji nieba, ale na drodze obliczeń matematycznych. Niespodziewane zmiany w ruchu orbitalnym Urana doprowadziły astronomów do wniosku, że podlega on perturbacjom pochodzącym od nieznanej planety. Neptun został następnie zaobserwowany przez Johanna Galle w miejscu przewidzianym przez Urbaina Le Verriera, a wkrótce został też odkryty jego największy księżyc, Tryton; żaden z pozostałych 13 znanych dziś księżyców Neptuna nie został odkryty za pomocą teleskopu aż do XX wieku.</p><p>Neptun przypomina składem Urana, co odróżnia go od większych gazowych olbrzymów, Jowisza i Saturna. Atmosfera Neptuna, choć – podobnie jak na Jowiszu i Saturnie – składa się głównie z wodoru i helu wraz ze śladami węglowodorów i prawdopodobnie azotu, zawiera większą ilość tzw. „lodów”, czyli substancji lotnych w warunkach ziemskich, takich jak woda, amoniak i metan. Astronomowie czasami kategoryzują Urana i Neptuna jako „lodowe olbrzymy” w celu podkreślenia tych różnic. Wnętrze Neptuna, podobnie jak Urana, składa się głównie z lodów i skał. Ślady metanu w zewnętrznych obszarach planety przyczyniają się do nadania jej charakterystycznego niebieskiego koloru.</p>";


//Displaing universe description with Web Workers
document.getElementById('universe-description-link').addEventListener('click', showUniverseDescription);

function showUniverseDescription(event) {

    event.preventDefault();
    document.getElementById('solar-system-content').style.display = 'none';
    document.getElementById('universe-description').style.display = 'block';

    if (typeof(Worker) !== "undefined") {

        if (typeof(w) == "undefined") {

            w = new Worker("universeDescription.js");
        }

        w.addEventListener("message", function(event) {

            let paragraphText = document.createTextNode(event.data);
            let newParagraph = document.createElement('p');
            newParagraph.appendChild(paragraphText);
            document.getElementById('universe-description').appendChild(newParagraph);
        });
    } 
    else {
        document.getElementById('universe-description').innerHTML = 'Sorry! No Web Worker support.';
    }
}

//Displaing Solar System section
document.getElementById('solar-system-link').addEventListener('click', showSolarSystem);

function showSolarSystem(event) {

    event.preventDefault();
    document.getElementById('universe-description').style.display = 'none';
    document.getElementById('solar-system-content').style.display = 'flex';
}
