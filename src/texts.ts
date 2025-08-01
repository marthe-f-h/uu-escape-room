const getTexts = (language: Language) => {
	return language === 'norsk' ? no : en
}

const no = {
  Velkomstside: {
    velkommen: 'Velkommen til Escape Room - Gudenes gunst!',
    beskrivelse:
      'Dette er et spill for å lære å bruke skjermleser. For å løse escape room oppgavene må du bruke skjermleser for å få med deg hintene og navigere i spillet. Noen sider kan du se blurret, andre kan du ikke se noen ting. Lykke til!',
    test: 'Test skjermleser',
    startLink: 'Start spillet'
  },
  TestSide: {
    title: 'uu spill - tester',
    navigasjon: 'Navigasjon for tester',
    overskrift: 'Test skjermleser',
    info: 'Prøv deg frem med skjermleser',
    switch: 'Skjul skjermen',
    step1: {
      navn: 'Skjemakontroller',
      heading: 'Test skjemakontroller',
      test1: {
        bildeAlt: '3 blåbær',
        label: 'Hvor mange blåbær er det på bildet?',
        alt1: '1',
        alt2: '2',
        alt3: '3'
      },
      test2: {
        label: 'Hvilke farger er det i regnbuen?',
        alt1: 'Rød',
        alt2: 'Grønn',
        alt3: 'Sort'
      }
    },
    step2: {
      navn: 'Tabeller',
      heading: 'Test tabeller og tekstfelt',
      test1: {
        tabell: 'Frukt',
        tabellFrukt: 'Frukt',
        tabellPris: 'Pris per kg',
        beholdning: 'Beholdning',
        banan: 'Banan',
        eple: 'Eple',
        kiwi: 'Kiwi',
        alt1: '1',
        alt2: '2',
        alt3: '3',
        label: 'Hva koster 2kg bananer?'
      }
    },
    step3: {
      navn: 'Kun for skjermleser',
      heading: 'Test innhold kun for skjermleser',
      test1: {
        overskrift: 'Jeg er usynlig',
        label: 'Hva står det på den usynlige overskriften?'
      },
      test2: {
        trigger: 'Trigg en alertmelding',
        alert: 'Her kommer oppdateringene med aria-live'
      }
    },
    step4: {
      navn: 'Ferdig',
      tekst: 'Gratulerer, du har fullført testen!'
    },
    alert: 'Du har svart',
    knapp: 'Svar'
  },
  SkjermleserKommandoer: {
    overskrift: 'Skjermleserkommandoer',
    voiceover: {
      label: 'Voiceover',
      liste: 'VoiceOver kommandoer',
      kommandoer: [
        {
          label: 'Slå på / av',
          value: 'Cmd + F5 (eller trykk Touch ID 3 ganger raskt)'
        },
        { label: 'Stop lesing', value: 'Ctrl' },
        {
          label: 'Leser neste element',
          value: 'Ctrl + Option + piltaster'
        },
        { label: 'Åpne rotor', value: 'Ctrl + Option + U' },
        { label: 'Lukke rotor', value: 'Esc' },
        {
          label: 'Navigere i rotor',
          value: 'Piltaster for å navigere og Enter for å velge'
        }
      ]
    },
    narrator: {
      label: 'Narrator',
      liste: 'Narrator kommandoer',
      kommandoer: [
        { label: 'Slå på / av', value: 'Ctrl + Windows + Enter' },
        { label: 'Stop lesing', value: 'Ctrl' },
        { label: 'Lese linje for linje', value: 'Pil opp / ned' },
        { label: 'Åpne elementliste', value: 'Caps Lock + fn + F5' },
        { label: 'Gå ut av elementliste', value: 'Esc' },
        {
          label: 'Scanne modus på / av',
          value: 'Caps Lock + Mellomrom'
        },
        { label: 'Lese hele siden', value: 'Caps Lock + M' }
      ]
    }
  },
  Start: {
    title: 'uu spill - intro',
    overskrift: 'Velkommen til Escape Room - Gudenes gunst!',
    intro: [
      'Du var soldat i keiserens tjeneste. En lojal kriger, bundet av ed og ære. Da riket vaklet under varsler om krig og sult, ble du utvalgt til et oppdrag kun de modigste kunne bære: å hente en eldgammel gjenstand - Lyren til Apollo - skjult dypt i et glemt tempel viet de eldgamle gudene.',
      'Lyren sies å kunne stilne krig og forvrenge skjebnen selv, men én lov står fast: Ingen dødelig skal trå inn i tempelet uten guddommelig kall.',
      'Du trosset varselet, du gikk inn. Slik falt dommen. Mørket tok deg, og du ble sendt til underverdenen - et sted der sjeler vandrer i evig skygge.',
      'Men alt håp er ikke tapt. Gudene er lunefulle, men ikke døve for mot. Du har én sjanse: Bevis din verdighet ved å fullføre prøvelsene de har lagt foran deg. Kunnskap, styrke og klokskap vil føre deg gjennom mørket.'
    ],
    mal: 'Finn veien gjennom prøvelsene gudene har lagt foran deg. Vinn tilbake deres gunst, gjennopprett balansen, kom tilbake til de levendes verden - og finn Apollos Lyre.'
  },
  Sekken: {
    overskrift: 'Sekken',
    tomt: 'Tomt...',
    Krukke: 'Krukke med tre firkanter',
    Pergament: 'Pergament der det står: Et tu, Brute? - Julius Cæsar',
    Sverd: 'Sverd med inngravering: Veni, Vidi, Vici - Julius Cæsar',
    Hjelm: 'Hjelm med inngravering: To mynter for min sjel',
    Mynter: 'En pose med mynter',
    Stein: 'En stein med inngravert tekst skrevet i sirkel: "Aeternitas"'
  },
  kode: {
    feil: 'Koden er feil!',
    rett: 'Koden er riktig!',
    videre: 'Gå videre',
    provKoden: 'Prøv koden',
    tidsstraff: 'Du får timeout i 20 sekunder for feil svar.',
    timeoutFerdig: 'Timeout ferdig, du kan prøve igjen.'
  },
  Venus: {
    title: 'uu spill - Venus',
    overskrift: 'En gåte fra Venus',
    oppgave: [
      'Langt nede, hvor skygger svøper sinn',
      'Yrende liv er kun ett minne',
      'Sjelene vandrer, men veien er smal',
      'Et ekko av stillhet er alt å finne',
      'Tiden bøyer seg for de ærlige tapre'
    ],
    oppgaveLabel: 'Hva er koden?',
    hint: 'Starten er viktigere enn det som kommer etter.',
    hint2: 'Koden er på fem tegn.',
    hint3: 'Bruk første bokstav fra hver linje i verset.',
    gave: 'Venus gir deg en keramikkrukke som du kan ta med deg på vegen videre. (Du finner den i sekken)'
  },
  Mars: {
    title: 'uu spill - Mars',
    overskrift: 'En gåte fra Mars',
    oppgave:
      'Mars gir deg oversikten over de siste slagene, men den er vanskelig å se.',
    tabellHeadere: ['Slag', 'Legion', 'Utfall'],
    tabellData: [
      { slag: 'Alesia', legion: 'Legio Mars', utfall: 'Seier' },
      {
        slag: 'Teutoburgerskogen',
        legion: 'Legio Draconis',
        utfall: 'Tap'
      },
      { slag: 'Actium', legion: 'Legio Mars', utfall: 'Seier' },
      { slag: 'Carrhae', legion: 'Legio Mars', utfall: 'Seier' },
      { slag: 'Zela', legion: 'Legio Ferrata', utfall: 'Tap' },
      { slag: 'Philippi', legion: 'Legio Mars', utfall: 'Seier' },
      { slag: 'Arausio', legion: 'Legio Mars', utfall: 'Seier' },
      { slag: 'Gergovia', legion: 'Legio Mercurii', utfall: 'Seier' },
      { slag: 'Genovia', legion: 'Legio Mia', utfall: 'Seier' },
      { slag: 'Munda', legion: 'Legio Mars', utfall: 'Seier' },
      { slag: 'Arendell', legion: 'Legio Elsa', utfall: 'Seier' },
      { slag: 'Rappe', legion: 'Legio Ferrata', utfall: 'Seier' },
      { slag: 'Dyrrhachium', legion: 'Legio Mars', utfall: 'Seier' }
    ],
    oppgaveLabel: 'Hvor mange seiere har legionen til Mars?',
    hint: 'Skriv slik en keiser ville ha skrevet det.',
    hint2: 'Skriv svaret med romertall',
    gave: 'Mars gir deg et sverd som du kan ta med deg på vegen videre. (Du finner det i sekken)'
  },
  Minerva: {
    title: 'uu spill - Minerva',
    overskrift: 'En gåte fra Minerva',
    oppgave:
      'Minerva møter deg og viser deg veien til et rom med tre statuer. Statuene er av gudene Mars, Merkur og Apollo. Hver statue holder en tavle, der en er sannferdig, en lyver, og en kan vi ikke vite om sier sannhet eller løgn.',
    bilder: [
      'Statue av Mars. Statuen holder en steintavle der det står: "Merkur er den sannferdige"',
      'Statue av Merkur. Statuen holder en steintavle der det står: "Jeg er ikke sannferdig"',
      'Statue av Apollo. Statuen holder en steintavle der det står: "Merkur er løgneren"'
    ],
    oppgaveLabel: 'Hvem er den sannferdige?',
    gave: 'Minerva gir deg en hjelm som du kan ta med deg på vegen videre. (Du finner den i sekken)'
  },
  Neptun: {
    title: 'uu spill - Neptun',
    overskrift: 'En gåte fra Neptun',
    oppgave: [
      'I mørket møter vi Neptun som tar deg ombord på skipet som kan føre deg over glemselens hav. På roret er det inngravert et rutenett med romerske tall.',
      'Under vises et ror med 9 knapper fordelt på 3 rader og 3 kolonner. Mellom knappene er det synlige kanter, ingen kanter er mot yttersidene.'
    ],
    oppgaveLabel:
      'Før Neptun forlater deg forteller han deg at "Kun ved å tre ganger røre ferden, vil skipet seile."',

    kodeVisning: 'Valgt kombinasjon: ',
    hint: 'Hvil hånden tre ganger der alle veier krysser.',
    gave: 'Skipet beveger seg sakte over glemselens hav. På skipet finner du en liten pose med mynter som du tar med deg i sekken.'
  },
  Merkur: {
    title: 'uu spill - Merkur',
    overskrift: 'En gåte fra Merkur',
    oppgave: [
      'Skipet legger til ved kanten av et fjell med tre veier å velge. Merkur tar i mot deg og gir deg din neste prøve:',
      'De fleste handler, jeg forstår. Bare den som ser kan forstå. Vini, vidi, vici. Kun min veg vil føre deg over fjellet.'
    ],
    oppgaveLabel: 'Hvilken veg velger du?',
    hint: 'Jeg kom, jeg så, jeg erobret - Julius Cæsar',
    gave: 'Merkur gir deg en stein som du kan ta med deg på vegen videre. (Du finner den i sekken)'
  },
  Pluto: {
    title: 'uu spill - Pluto',
    overskrift: 'En gåte fra Pluto',
    oppgave: [
      'Veien du har valgt fører deg til toppen av fjellet. Omringet av mørk tåke sitter Pluto foran et lite tempel og venter på deg. Han sier: "Ingen sjel kommer forbi uten å betale"',
      'Du finner frem posen med mynter du fant på skipet og heller dem utover bakken.'
    ],
    oppgaveLabel: 'Hvor mye må du betale Pluto?',
    lettMynt: 'Lett mynt',
    tungMynt: 'Tung mynt',
    knapp: 'Betal Pluto',
    feilmelding: 'Du har ikke betalt Pluto prisen for din sjel.',
    hint: 'Ekte riktdom veier tungt, det falske kan kun skinne',
    gave: 'Pluto gir deg en gammel pergamentrull som du kan ta med deg på vegen videre. (Du finner det i sekken)'
  },
  Jupiter: {
    title: 'uu spill - Jupiter',
    overskrift: 'En gåte fra Jupiter',
    oppgave: [
      'Du går inn i tempelet - og med ett er stillheten total. Luften er tykk og tung, og det er som selve tiden holder pusten. Ved enden av rommet, halvt skjult i mørket, sitter Jupiter på sin trone. I hånden holder han et glødende lyn som får de eldgamle søylene til å kaste lange dype skygger. Midt i rommet står et steinbord med ruter.',
      'Jupiters stemme bryter stillheten: "Påkall det evige tegn og du får vende tilbake."',
      'Rutenettet på bordet er delt opp i 9 ruter. Over rutene står det skrevet "Aeternitas"'
    ],
    oppgaveLabel: 'Velg rutene for å påkalle evigheten.',
    kodeVisning: 'Valgt kombinasjon: ',
    feilmelding: 'Du har ikke valgt riktig ruter.',
    gave: 'Jupiter hever hånden - og i det samme kaster han lynet. Et voldsomt smell. Så: Lys. Altoppslukende, blendende lys, som om solen selv eksploderer foran deg. Du lukker øynene - men det er som om lyset trenger igjennom alt. Kropp. Tanke. Sjel. Tiden selv... '
  },
  Slutten: {
    title: 'uu spill - Slutten',
    overskrift: 'Gratulerer, du har fullført spillet!',
    tekst: [
      '... Og så, like plutselig som det startet: stillhet. Når du åpner øynene igjen, er Jupiter borte. Tempelet er ikke lenger det som var i underverdenen, men der det hele begynte.',
      'Rommet er stille, sollyset faller svakt inn gjennom høye vinduer. Du er alene. Midt i rommet, på en pidestall av stein, ligger en gjenstand: Apollos lyre. Den gløder svakt - som om små gnister av Jupiters lyn ble værende igjen i strengene. Du løfter den, den er lett, men tung av mening. Med lyren i hånden starter du på ferden tilbake til din keiser - ikke som den samme som reiste, men en som nå har gudenes gunst.',
      'Rop ut din seiersglede så vi vet du har vunnet!'
    ]
  }
} as const

const en = {
  Velkomstside: {
    velkommen: 'Welcome to Escape Room - Favor of the Gods!',
    test: 'Test screen reader',
    beskrivelse:
      'This is a game to learn how to use a screen reader. To solve the escape room puzzles you will need to use a screen reader to get the hints and navigate the game. Some pages you may see a slightly blurred image, others you may not be able to see anything. Good luck!',
    startLink: 'Start the game'
  },
  TestSide: {
    title: 'uu spill - tests',
    navigasjon: 'Navigation for tests',
    overskrift: 'Test screen reader',
    info: 'Try it out with a screen reader',
    switch: 'Hide screen',
    step1: {
      navn: 'Form controls',
      heading: 'Test form controls',
      test1: {
        bildeAlt: '3 blueberries',
        label: 'How many blueberries are in the picture?',
        alt1: '1',
        alt2: '2',
        alt3: '3'
      },
      test2: {
        label: 'What colors are in the rainbow?',
        alt1: 'Red',
        alt2: 'Green',
        alt3: 'Black'
      }
    },
    step2: {
      navn: 'Tables',
      heading: 'Test tables and text fields',
      test1: {
        tabell: 'Fruit',
        tabellFrukt: 'Fruit',
        tabellPris: 'Price per kg',
        beholdning: 'Stock',
        banan: 'Banana',
        eple: 'Apple',
        kiwi: 'Kiwi',
        alt1: '1',
        alt2: '2',
        alt3: '3',
        label: 'What is the price of 2kg of bananas?'
      }
    },
    step3: {
      navn: 'Screen reader only',
      heading: 'Test content only for screen reader',
      test1: {
        overskrift: 'I am invisible',
        label: 'What does the invisible heading say?'
      },
      test2: {
        trigger: 'Trigger an alert message',
        alert: 'Here are the updates with aria-live'
      }
    },
    step4: {
      navn: 'Finished',
      tekst: 'Congratulations, you have completed the test!'
    },
    alert: 'You have answered',
    knapp: 'Answer'
  },
  SkjermleserKommandoer: {
    overskrift: 'Screen reader commands',
    voiceover: {
      label: 'Voiceover',
      liste: 'VoiceOver commands',
      kommandoer: [
        {
          label: 'Turn on / off',
          value: 'Cmd + F5 (or press Touch ID 3 times quickly)'
        },
        { label: 'Stop reading', value: 'Ctrl' },
        {
          label: 'Read next element',
          value: 'Ctrl + Option + arrow keys'
        },
        { label: 'Open rotor', value: 'Ctrl + Option + U' },
        { label: 'Close rotor', value: 'Esc' },
        {
          label: 'Navigate in rotor',
          value: 'Arrow keys to navigate and Enter to select'
        }
      ]
    },
    narrator: {
      label: 'Narrator',
      liste: 'Narrator kommandoer',
      kommandoer: [
        { label: 'Turn on / off', value: 'Ctrl + Windows + Enter' },
        { label: 'Stop reading', value: 'Ctrl' },
        { label: 'Read line by line', value: 'Up / Down arrow' },
        { label: 'Open element list', value: 'Caps Lock + fn + F5' },
        { label: 'Exit element list', value: 'Esc' },
        { label: 'Scan mode on / off', value: 'Caps Lock + Space' },
        { label: 'Read the whole page', value: 'Caps Lock + M' }
      ]
    }
  },
  Start: {
    title: 'uu game - intro',
    overskrift: 'Welcome to Escape Room - Favor of the Gods!',
    intro: [
      'You were a soldier in the service of the Emperor. A loyal warrior, bound by oath and honor. As the empire faltered under warnings of war and famine, you were chosen for a mission only the bravest could undertake: to retrieve an ancient artifact - the Lyre of Apollo - hidden deep in a forgotten temple dedicated to the ancient gods.',
      'The lyre is said to be able to silence war and distort fate itself, but one law stands firm: no mortal shall enter the temple without a divine calling.',
      'You defied the warning, you entered. Thus was the judgment pronounced. Darkness took you, and you were sent to the underworld - a place where souls wander in eternal shadow.',
      'But all hope is not lost. The gods are capricious, but not deaf to courage. You have one chance: prove your worth by completing the trials they have set before you. Knowledge, strength, and wisdom will guide you through the darkness.'
    ],
    mal: 'Find your way through the trials the gods have set before you. Regain their favor, restore balance, return to the world of the living - and find the Lyre of Apollo.'
  },
  Sekken: {
    overskrift: 'Backpack',
    tomt: 'Empty...',
    Krukke: 'Jar with three squares',
    Pergament: 'Parchment with the inscription: Et tu, Brute? - Julius Caesar',
    Sverd: 'Sword with engraving: Veni, Vidi, Vici - Julius Caesar',
    Hjelm: 'Helmet with engraving: Two coins for my soul',
    Mynter: 'A bag of coins',
    Stein: 'A stone with engraved text written in a circle: "Aeternitas"'
  },
  kode: {
    feil: 'The code is incorrect!',
    rett: 'The code is correct!',
    videre: 'Go further',
    provKoden: 'Try the code',
    tidsstraff: 'You will get a timeout of 30 seconds for an incorrect answer.',
    timeoutFerdig: 'Timeout finished, you can try again.'
  },
  Venus: {
    title: 'uu spill - Venus',
    overskrift: 'A riddle from Venus',
    oppgave: [
      'Far below, where shadows shroud the mind',
      'Bustling life is just a memory',
      'Souls wander, but the path is narrow',
      'An echo of silence is all there is to find',
      'Time bows to the honest brave'
    ],
    oppgaveLabel: 'What is the code?',
    hint: 'The beginning is more important than what comes after.',
    hint2: 'The code is five characters long.',
    hint3: 'Use the first letter from each line in the verse.',
    gave: 'Venus gives you a ceramic jar that you can take with you on your journey. (You will find it in your backpack)'
  },
  Mars: {
    title: 'uu spill - Mars',
    overskrift: 'A riddle from Mars',
    oppgave: [
      'Mars gives you an overview of the latest battles, but it is hard to see.'
    ],
    tabellHeadere: ['Battle', 'Legion', 'Outcome'],
    tabellData: [
      { slag: 'Alesia', legion: 'Legio Mars', utfall: 'Victory' },
      {
        slag: 'Teutoburg Forest',
        legion: 'Legio Draconis',
        utfall: 'Defeat'
      },
      { slag: 'Actium', legion: 'Legio Mars', utfall: 'Victory' },
      { slag: 'Carrhae', legion: 'Legio Mars', utfall: 'Victory' },
      { slag: 'Zela', legion: 'Legio Ferrata', utfall: 'Defeat' },
      { slag: 'Philippi', legion: 'Legio Mars', utfall: 'Victory' },
      { slag: 'Arausio', legion: 'Legio Mars', utfall: 'Victory' },
      { slag: 'Gergovia', legion: 'Legio Mercurii', utfall: 'Victory' },
      { slag: 'Genovia', legion: 'Legio Mia', utfall: 'Victory' },
      { slag: 'Munda', legion: 'Legio Mars', utfall: 'Victory' },
      { slag: 'Arendell', legion: 'Legio Elsa', utfall: 'Victory' },
      { slag: 'Rappe', legion: 'Legio Ferrata', utfall: 'Victory' },
      { slag: 'Dyrrhachium', legion: 'Legio Mars', utfall: 'Victory' }
    ],
    oppgaveLabel: 'How many victories does the Legion of Mars have?',
    hint: 'Write as an emperor would have written it.',
    hint2: 'Write the answer in Roman numerals',
    gave: 'Mars gives you a sword that you can take with you on your journey. (You will find it in your backpack)'
  },
  Minerva: {
    title: 'uu spill - Minerva',
    overskrift: 'A riddle from Minerva',
    oppgave:
      'Minerva meets you and shows you the way to a room with three statues. The statues are of the gods Mars, Mercury, and Apollo. Each statue holds a tablet, one is truthful, one lies, and one we cannot know if it speaks truth or lies.',
    gaate:
      'The first statue is Apollo, the tablet says Mercury is the truthful one. By Mercury\'s tablet it says: "I am not truthful". By Mars\' tablet it says that Mercury is the liar.',
    bilder: [
      'Statue of Mars. The statue holds a stone tablet that says: "Mercury is the truthful one"',
      'Statue of Mercury. The statue holds a stone tablet that says: "I am not truthful"',
      'Statue of Apollo. The statue holds a stone tablet that says: "Mercury is the liar"'
    ],
    oppgaveLabel: 'Who is the truthful one?',
    gave: 'Minerva gives you a helmet that you can take with you on your journey. (You will find it in your backpack)'
  },
  Neptun: {
    title: 'uu game - Neptun',
    overskrift: 'A riddle from Neptune',
    oppgave: [
      'In the darkness we meet Neptune who takes you aboard the ship that can take you across the sea of oblivion. A grid of Roman numerals is engraved on the rudder.',
      'Below is a rudder with 9 buttons arranged in 3 rows and 3 columns. Between the buttons, there are visible edges, no edges are against the outer sides.'
    ],
    oppgaveLabel:
      'Before Neptune leaves you, he tells you that "Only by thrice touching the rudder will the ship sail."',
    kodeVisning: 'Selected combination: ',
    hint: 'Hold your hand three times where all paths cross.',
    gave: 'The ship slowly moves across the sea of oblivion. You find a small bag of coins on the ship that you take with you in your backpack.'
  },
  Merkur: {
    title: 'uu game - Mercury',
    overskrift: 'A riddle from Mercury',
    oppgave: [
      'The ship docks at the edge of a mountain with three paths to choose from. Mercury greets you and gives you your next trial:',
      'Most acts, I understand. Only those who see can understand. Vini, vidi, vici. Only my path will take you over the mountain.'
    ],
    oppgaveLabel: 'Which path do you choose?',
    hint: 'I came, I saw, I conquered - Julius Caesar',
    gave: 'Mercury gives you a stone that you can take with you on your journey. (You will find it in your backpack)'
  },
  Pluto: {
    title: 'uu game - Pluto',
    overskrift: 'A riddle from Pluto',
    oppgave: [
      'The path you have chosen leads you to the top of the mountain. Surrounded by dark fog, Pluto awaits you in front of a small temple. He says: "No soul passes without paying"',
      'You take out the bag of coins you found on the ship and pour them onto the ground.'
    ],
    oppgaveLabel: 'How much do you have to pay Pluto?',
    lettMynt: 'Light coin',
    tungMynt: 'Heavy coin',
    knapp: 'Pay Pluto',
    feilmelding: 'You have not paid Pluto the price for your soul.',
    hint: 'Genuine wealth weighs heavily, the false can only shine.',
    gave: 'Pluto gives you an ancient parchment scroll that you can take with you on your journey. (You will find it in your backpack)'
  },
  Jupiter: {
    title: 'uu game - Jupiter',
    overskrift: 'A riddle from Jupiter',
    oppgave: [
      'You enter the temple - and suddenly the silence is total. The air is thick and heavy, and it is as if time itself holds its breath. At the end of the room, half hidden in the darkness, Jupiter sits on his throne. In his hand he holds a glowing lightning bolt that makes the ancient pillars cast long, deep shadows. In the middle of the room stands a stone table with a grid.',
      'The voice of Jupiter breaks the silence: "Invoke the eternal sign and you will return."',
      'The grid on the table is divided into 9 squares. Above the squares is written "Aeternitas"'
    ],
    oppgaveLabel: 'Choose the squares to invoke eternity.',
    kodeVisning: 'Selected combination: ',
    feilmelding: 'You have not chosen the correct squares.',
    gave: 'Jupiter raises his hand - and at the same time he throws the lightning. A violent bang. Then: Light. All-consuming, burning light, as if the sun itself explodes before you. You close your eyes - but it is as if the light burns through everything. Body. Thought. Soul. Time itself...'
  },
  Slutten: {
    title: 'uu game - The End',
    overskrift: 'Congratulations, you have completed the game!',
    tekst: [
      '...And then, just as suddenly as it began: silence. When you open your eyes again, Jupiter is gone. The temple is no longer what it was in the underworld, but where it all began.',
      "The room is quiet, the sunlight falls weakly through high windows. You are alone. In the middle of the room, on a pedestal of stone, lies an object: The lyre of Apollo. It glows weakly - as if small sparks of Jupiter's lightning remained in the strings. You lift it, it is light, but heavy with meaning. With the lyre in your hand, you start on the journey back to your emperor - not as the same who left, but one who now has the favor of the gods.",
      'Shout out your joy of victory so we know you have won!'
    ]
  }
} as const

export type Language = 'norsk' | 'engelsk'
export type Texts = typeof no | typeof en

export default getTexts
