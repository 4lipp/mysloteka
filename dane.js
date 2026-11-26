/* ==================================================================
   MYŚLOTEKA — DANE STRONY (jedyne miejsce, w którym zmieniasz treść)
   ------------------------------------------------------------------
   Imiona, nazwiska, role, opisy, aktualności i odcinki są TYLKO tutaj.
   Strona (index.html) czyta je z tego pliku, więc poprawka w jednym
   miejscu zmienia je wszędzie: na kartach, w oknach profilu i w liście.

   Jak edytować na GitHubie: otwórz dane.js → ołówek (Edit) → zmień tekst
   w cudzysłowach → Commit changes. Nie usuwaj przecinków, nawiasów { } [ ]
   ani cudzysłowów. Po zapisaniu strona zmieni się w ciągu ~1–10 minut.

   EKIPA (BAKED_PEOPLE) — pola jednej osoby:
     "name"      imię i nazwisko (dokładnie tak, jak ma się wyświetlać)
     "role"      rola, np. "Prowadząca", "Montażysta"
     "team"      ekipa/format, np. "MiksTalk", "Montaż i wsparcie"
     "bio"       krótki opis na kartę (1–2 zdania)
     "about"     dłuższy opis w oknie profilu: ["akapit 1", "akapit 2"]
     "links"     przyciski: [{"type":"instagram","label":"@login","url":"https://..."},
                             {"type":"linkedin","label":"Imię Nazwisko","url":"https://..."}]
                 (typy: instagram, linkedin, facebook, www)
     "photo"     zdjęcie: {"t":1,"u":"ekipa-nazwa.webp"} — plik wrzuć obok;
                 brak zdjęcia: {"t":0} (pokażą się inicjały)
     "createdAt" data dołączenia RRRR-MM-DD

   AKTUALNOŚCI (BAKED_NEWS) — najnowsza na górze:
     "title", "text", "date" (RRRR-MM-DD), "tag" (np. "MiksTalk", "Mindblow", "Ekipa"),
     "link" (np. film na YouTube — miniaturka pobierze się sama),
     "spotify" (link do odcinka — doda przycisk Spotify),
     "img" + "imgAlt" (własne zdjęcie zamiast miniaturki),
     "until" (RRRR-MM-DD — po tej dacie wpis sam zniknie)

   ODCINKI (BAKED_VIDS) — zapasowa lista filmów z YouTube (najnowszy na górze):
     {"id":"identyfikator z linku youtube.com/watch?v=...","title":"...","date":"RRRR-MM-DD"}
   ================================================================== */

window.BUILD_DATE = "2026-11-26";

window.BAKED_PEOPLE = [
  {
    "id": "seed-01",
    "name": "Filip Wiśniewski",
    "role": "Redaktor naczelny",
    "team": "Filip i Świat Jutra",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Kognitywista i głos formatu „Filip i Świat Jutra”. Opowiada o tym, co dzieje się w głowie człowieka, kiedy spotyka technologię.",
    "photo": {
      "t": 1,
      "u": "ekipa-filip-wisniewski.webp"
    },
    "createdAt": "2024-10-01",
    "about": [
      "Jestem kognitywistą, absolwentem studiów Cognitive Science na Uniwersytecie Mikołaja Kopernika w Toruniu. Od początku studiów krążę wokół jednego pytania: co dzieje się w głowie człowieka, kiedy spotyka technologię. W badaniach zajmowałem się teorią umysłu, emocjami i interakcją człowieka z robotem, a w pracy magisterskiej tym, jak robot społeczny wpływa na kreatywność i dobrostan.",
      "Najbardziej lubię uczyć z robotami i o robotach. Pokazywać, jak działają, tłumaczyć technologię prostym językiem i patrzeć, jak ktoś po raz pierwszy sam zmusza robota do ruchu. Poza tym działam w Toruńskim Kole Kognitywistycznym, współorganizowałem konferencję naukową NEUROMANIA i ogólnopolski zjazd kół kognitywistycznych KOGNI-TOR.",
      "W Myślotece przygotowuję i nagrywam odcinki o umyśle, nauce i nowych technologiach. Po godzinach pływam, gram w gry i interesuję się grafiką komputerową."
    ],
    "links": [
      {
        "type": "instagram",
        "label": "@4lipp",
        "url": "https://www.instagram.com/4lipp/"
      },
      {
        "type": "linkedin",
        "label": "Filip Wiśniewski",
        "url": "https://www.linkedin.com/in/filip-wi%C5%9Bniewski-731b32193/"
      }
    ],
    "photoPos": "50% 45%"
  },
  {
    "id": "seed-02",
    "name": "Karolina Dembicka",
    "role": "Zastępczyni redaktora naczelnego",
    "team": "KogniNews",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Współprowadzi KogniNews — przegląd badań i książek. Wcześniej montowała odcinki.",
    "photo": {
      "t": 1,
      "u": "ekipa-karolina-dembicka.webp"
    },
    "createdAt": "2024-10-01"
  },
  {
    "id": "seed-03",
    "name": "Magdalena Żelazna",
    "role": "Prowadząca",
    "team": "KogniNews",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Współprowadzi KogniNews — dba o to, żeby słuchacze wiedzieli, co w kognitywistyce piszczy.",
    "photo": {
      "t": 1,
      "u": "ekipa-magdalena-zelazna.webp"
    },
    "createdAt": "2025-10-01"
  },
  {
    "id": "seed-04",
    "name": "Kamil Bagiński",
    "role": "Prowadzący wywiady",
    "team": "Wywiady",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Prowadzi rozmowy z gośćmi — mniej o wykładach, więcej o człowieku.",
    "photo": {
      "t": 1,
      "u": "ekipa-kamil-baginski.webp"
    },
    "createdAt": "2025-10-01",
    "about": [
      "Prowadzę rozmowy z ludźmi nauki. Zależy mi na tym, aby dotyczyły tematów wykraczających poza treści poruszane podczas ich wykładów, w artykułach czy pojawiające się w codziennych rozmowach.",
      "Rozmowy mają luźny charakter. Oznacza to, że poza wspólnymi fragmentami i pojedynczymi, wcześniej przygotowanymi pytaniami, często odbiegają od pierwotnie założonego tematu."
    ],
    "photoPos": "50% 50%"
  },
  {
    "id": "seed-05",
    "name": "Martyna Michalska",
    "role": "Social Media",
    "team": "Social Media",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Ekipa social mediów — profile, posty i społeczność słuchaczy.",
    "photo": {
      "t": 1,
      "u": "ekipa-martyna-michalska.webp"
    },
    "createdAt": "2025-10-01"
  },
  {
    "id": "seed-06",
    "name": "Marta Sołtan",
    "role": "Social Media",
    "team": "Social Media",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Ekipa social mediów — grafiki i krótkie materiały promocyjne.",
    "photo": {
      "t": 1,
      "u": "ekipa-marta-soltan.webp"
    },
    "createdAt": "2025-10-01"
  },
  {
    "id": "seed-07",
    "name": "Maksymilian Płużycki",
    "role": "Prowadzący",
    "team": "MiksTalk",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Współprowadzi MiksTalk — rozmowy o psychologii i codzienności, na luzie.",
    "photo": {
      "t": 1,
      "u": "ekipa-maksymilian-pluzycki.webp"
    },
    "createdAt": "2025-10-01"
  },
  {
    "id": "seed-08",
    "name": "Viktoria Flader",
    "role": "Prowadząca",
    "team": "MiksTalk",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Współprowadzi MiksTalk — kognitywistyczne spojrzenie na to, co dzieje się w głowie.",
    "photo": {
      "t": 1,
      "u": "ekipa-victoria-floder.webp"
    },
    "createdAt": "2025-10-01"
  },
  {
    "id": "seed-09",
    "name": "Juls",
    "role": "Kierownik techniczny",
    "team": "Montaż i wsparcie",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Montaż i koordynacja montażystów. Na luziku pokaże i nauczy wszystkiego, co związane z montażem.",
    "photo": {
      "t": 1,
      "u": "ekipa-juls.webp"
    },
    "createdAt": "2026-03-01",
    "about": [
      "hejka, jestem julia (ale częściej znajdziecie mnie pod moim skrótowym imieniem – juls) i studiuję kognitywistykę już na trzecim roku!!! W Myślotece zajmuję się montażem i koordynacją montażystów ◡̈ dbam o to, żeby KAŻDY z nas mógł popłynąć wyobraźnią i dodać coś swojego do filmików, które montuje ;p",
      "na luziku jestem w stanie pomóc, pokazać, nauczyć czegokolwiek związanego z montażem… piszcie do mnie na fb!!!",
      "prywatnie interesuję się neurobiologią, zajmuję się czterema słodkimi kotkami, a wolne chwile poświęcam na rozwijanie cierpliwości i dokładności poprzez ceramikę i szycie C-`♡´-"
    ],
    "links": [
      {
        "type": "facebook",
        "label": "juls",
        "url": "https://www.facebook.com/julsjuls23.33"
      }
    ]
  },
  {
    "id": "seed-11",
    "name": "Daniel Kisiel",
    "role": "PR & Advisor",
    "team": "Mówcy",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Mówca — nowy głos w ekipie Myśloteki.",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-19"
  },
  {
    "id": "seed-13",
    "name": "Iwo Bochenek",
    "role": "Prowadzący",
    "team": "Prowadzący",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-18"
  },
  {
    "id": "seed-14",
    "name": "Julia Dudzińska",
    "role": "Prowadząca",
    "team": "Prowadzący",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Studentka II roku kognitywistyki. W nagraniach „schodzi na ziemię” z trudnymi zagadnieniami i podpowiada, jak radzić sobie w kogni-codzienności.",
    "photo": {
      "t": 1,
      "u": "ekipa-julia-dudzinska.webp"
    },
    "createdAt": "2026-11-18",
    "about": [
      "Hejka! Jestem studentką II roku kognitywistyki na Uniwersytecie Mikołaja Kopernika w Toruniu. Myślę, że większość studentów tego niecodziennego kierunku natknęła się na przeróżne trudności. Ja również jestem świadoma ich pewnej części, dlatego w moich nagraniach będę starała się przede wszystkim „zejść na ziemię” z ciężkimi zagadnieniami, rozkładać wszystko tak, aby było bardziej zrozumiałe, i pokazać propozycje radzenia sobie z danymi kłopotami.",
      "Wszystkie treści będą ukazane z perspektywy osoby, która wciąż poszukuje swojego miejsca w świecie. Mimo tego, że nie jestem specjalistką, będę szczęśliwa, jeśli pomogę chociaż jednej osobie w jej kogni-codzienności. Moja droga z podcastami dopiero się zaczyna – pragnę dać z siebie wszystko, by odcinki z moim udziałem były jak najlepszej jakości.",
      "Oprócz tego zamierzam dzielić się swoimi przemyśleniami w innych sekcjach, bo moja głowa wiecznie buzuje. Uwielbiam rozmawiać o filozofii umysłu, tematach egzystencjalnych oraz zagadnieniach z zakresu psychologii. Swoją przyszłość kieruję w stronę UX designu lub zastosowania VR w różnego typu badaniach.",
      "Należę do pięciu sekcji Toruńskiego Koła Kognitywistycznego: Myśloteki, Zespołu R, Sekcji Użytkownika, Sekcji VR i KogniKotów. W wolnym czasie uwielbiam rysować, robić eksperymentalne makijaże, jeździć konno i spotykać się ze znajomymi. Kocham nowe doświadczenia, a poszerzanie horyzontów sprawia mi wielką satysfakcję. Myśloteka górą!"
    ],
    "photoPos": "50% 50%"
  },
  {
    "id": "seed-15",
    "name": "Antoni Wałejko",
    "role": "Prowadzący",
    "team": "Prowadzący",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-18"
  },
  {
    "id": "seed-16",
    "name": "Amadeusz Sitarczyk",
    "role": "Montażysta",
    "team": "Montaż i wsparcie",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "Montuje filmiki kognitywistyczne. Dopiero zaczyna przygodę z kogni, więc jest jednocześnie częścią ekipy i słuchaczem.",
    "photo": {
      "t": 1,
      "u": "ekipa-amadeusz-sitarczyk.webp"
    },
    "createdAt": "2026-11-18",
    "about": [
      "Montuję filmiki kognitywistyczne, części w Oplu, a w przyszłości może również kafelki i płyty indukcyjne.",
      "Czasem lubię coś ugotować, w coś popykać, albo obejrzeć dobry film ((np. taki zmontowany przeze mnie)).",
      "Właściwie dopiero zacząłem przygodę z kogni i nadal nie kumam wielu rzeczy, więc jestem jednocześnie częścią ekipy i słuchaczem! CoolCoolCool."
    ],
    "photoPos": "50% 50%"
  },
  {
    "id": "seed-17",
    "name": "Jakub Worzała",
    "role": "Montażysta",
    "team": "Montaż i wsparcie",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-18"
  },
  {
    "id": "seed-18",
    "name": "Krzysztof Heciak",
    "role": "Montażysta",
    "team": "Montaż i wsparcie",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-18"
  },
  {
    "id": "seed-19",
    "name": "Franek Ryszko",
    "role": "Montażysta",
    "team": "Montaż i wsparcie",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-18"
  },
  {
    "id": "seed-20",
    "name": "Zuzanna Zabielska",
    "role": "Social Media",
    "team": "Social Media",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 1,
      "u": "ekipa-zuzanna-zabielska.webp"
    },
    "createdAt": "2026-11-18",
    "photoPos": "50% 50%"
  },
  {
    "id": "seed-21",
    "name": "Antek Sadecki",
    "role": "Prowadzący",
    "team": "Prowadzący",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-18"
  },
  {
    "id": "seed-22",
    "name": "Bartek Steckiewicz",
    "role": "Montażysta",
    "team": "Montaż i wsparcie",
    "circle": "TKK",
    "phone": "",
    "email": "",
    "album": "",
    "bio": "",
    "photo": {
      "t": 0
    },
    "createdAt": "2026-11-26"
  }
];

window.BAKED_NEWS = [
  {
    "id": "mindblow-aw-2026-11",
    "tag": "Mindblow",
    "title": "Mindblow: praca Antoniego Wałejko — ironia po polsku i po koreańsku",
    "text": "Często mówimy jedno, a myślimy co innego — i rozmówca i tak wie, o co chodzi. W nowym Mindblow Karolina Dembicka rozmawia z Antonim Wałejko o jego badaniu ironii werbalnej: jak polska bezpośredniość wypada przy mocno zhierarchizowanej komunikacji w Korei Południowej i jak relacja między rozmówcami zmienia odbiór tych samych słów. Premiera 23 listopada.",
    "link": "https://www.youtube.com/watch?v=TpjJXPKpAtg",
    "spotify": "https://open.spotify.com/episode/6Y2VTIABolwYuqtAsRZ5Th",
    "date": "2026-11-23"
  },
  {
    "id": "spotkanie-ekipy-2026-11",
    "tag": "Ekipa",
    "title": "Nowa ekipa Myśloteki w komplecie — za nami pierwsze spotkanie",
    "text": "18 listopada pierwszy raz spotkaliśmy się w nowym, powiększonym składzie. Nowe twarze w montażu, prowadzeniu i social mediach, dużo poznawania się, planowania i integracji do późna. Rozeszliśmy się z głowami pełnymi pomysłów na kolejne odcinki i formaty — już niedługo usłyszycie, co z tego wyszło. Dzięki, że jesteście z nami!",
    "img": "aktualnosc-spotkanie-ekipy.webp",
    "imgAlt": "Ekipa Myśloteki przy wspólnym stole podczas spotkania integracyjnego",
    "date": "2026-11-18"
  },
  {
    "id": "mikstalk-2026-11",
    "tag": "MiksTalk",
    "title": "Nowy MiksTalk: „Na co komu dziś” już jest",
    "text": "Najnowszy odcinek MiksTalka jest już na YouTube — premiera 16 listopada. Kliknij, żeby obejrzeć.",
    "link": "https://www.youtube.com/watch?v=xSWnNYdnacg",
    "date": "2026-11-16"
  },
  {
    "id": "cyberpunk-2026-11",
    "tag": "Filip i Świat Jutra",
    "title": "Filip i Świat Jutra: CYBERPUNK — wszczepy, tożsamość, granica między mną a maszyną",
    "text": "Odcinek z 2 listopada już na YouTube — o wszczepach, tożsamości i granicy między człowiekiem a maszyną.",
    "link": "https://www.youtube.com/watch?v=FpaQGGYBC90",
    "date": "2026-11-02"
  },
  {
    "id": "kognitor-2026-10",
    "tag": "Wydarzenia specjalne",
    "title": "KOGNI-ToR: cała Polska w jednym mózgu",
    "text": "Wydarzenie z 26 października już na YouTube — relacja z KOGNI-ToRu.",
    "link": "https://www.youtube.com/watch?v=nKTeMrcj1gQ",
    "date": "2026-10-26"
  },
  {
    "id": "mindblow-fw-2026-10",
    "tag": "Mindblow",
    "title": "Mindblow: praca Filipa Wiśniewskiego",
    "text": "Rozmowa o pracy Filipa Wiśniewskiego (premiera 19 października) już na YouTube.",
    "link": "https://www.youtube.com/watch?v=8oaEpUSj9og",
    "date": "2026-10-19"
  },
  {
    "id": "mindblow-no-2026-10",
    "tag": "Mindblow",
    "title": "Mindblow: praca Natalii Olczak",
    "text": "Rozmowa o pracy Natalii Olczak (premiera 12 października) już na YouTube.",
    "link": "https://www.youtube.com/watch?v=CNosXM_RM98",
    "date": "2026-10-12"
  }
];

window.BAKED_VIDS = [
  {"id": "TpjJXPKpAtg", "title": "Studenckie mind-blowy, czyli rozmowy o pracach naszych studentów. Praca Antoniego Wałejko", "date": "2026-11-23"},
  {"id": "xSWnNYdnacg", "title": "Na co komu dziś - Mikstalk", "date": "2026-11-16"},
  {"id": "FpaQGGYBC90", "title": "Filip i Świat Jutra | CYBERPUNK - Wszczepy, tożsamość, granica między mną a maszyną", "date": "2026-11-02"},
  {"id": "nKTeMrcj1gQ", "title": "Wydarzenie: KOGNI-ToR — cała Polska w jednym mózgu", "date": "2026-10-26"},
  {"id": "8oaEpUSj9og", "title": "Studenckie mind-blowy, czyli rozmowy o pracach naszych studentów. Praca Filipa Wiśniewskiego.", "date": "2026-10-19"},
  {"id": "CNosXM_RM98", "title": "Studenckie mind-blowy, czyli rozmowy o pracach naszych studentów. Praca Natalii Olczak", "date": "2026-10-12"},
  {"id": "sY6YFh7bfcI", "title": "Studenckie mind-blowy, czyli rozmowy o pracach naszych studentów. Praca Huberta Mizerki", "date": "2026-10-05"},
  {"id": "cj2iLkh_DpE", "title": "Czy żyjemy w symulacji? Nauka właśnie zaczyna odpowiadać. - Filip i świat jutra", "date": "2026-09-21"},
  {"id": "wuuwbgT5dWk", "title": "Studenckie mind-blowy, czyli rozmowy o pracach naszych studentów.  Praca Adrianny Kupisz", "date": "2026-09-07"},
  {"id": "92FAwUntHJM", "title": "To, kim jestem - MiksTalk", "date": "2026-08-24"},
  {"id": "pixoTC_pvzQ", "title": "Bóg 2.0 Dlaczego technologia stała się nową religią? -Filipi świat jutra", "date": "2026-08-10"},
  {"id": "tkpOySMQRjY", "title": "Zmysł czucia, jazz i manipulacja narodowa - Kogninews", "date": "2026-07-27"},
  {"id": "Yk9kAjsbqGM", "title": "Autobiografia - MiksTalk", "date": "2026-07-13"},
  {"id": "b7SXD3Gmfng", "title": "Alignment, czyli najważniejsze słowo jakiego nie znacie", "date": "2026-07-01"},
  {"id": "AhVkN6weA24", "title": "Flow neuroestetyka i AI -jak technologia zmienia nasze czucie sportu - KogniNews", "date": "2026-06-08"},
  {"id": "As7poN-XxYk", "title": "Fantazmat -  Mikstalk", "date": "2026-06-01"},
  {"id": "Non0zdqKoD0", "title": "Kod smaku i zła: Jak mózg interpretuje świat - KogniNews", "date": "2026-05-25"},
  {"id": "Xpferucb1Bw", "title": "Koniec Homo sapiens - Filip i świat jutra", "date": "2026-05-18"}
];
