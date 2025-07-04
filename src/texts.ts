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
		overskrift: 'Test skjermleser',
		info: 'Prøv deg frem med skjermleser',
		checkbox: 'Avkryssingsboks',
		bildeAlt: '3 blåbær',
		tekstfeltLabel: 'Hva er det på bildet?',
		alert: 'Du har svart',
		knapp: 'Svar',
		tabell: 'Frukt',
		tabellFrukt: 'Frukt',
		tabellPris: 'Pris per kg',
		beholdning: 'Beholdning',
		banan: 'Banan',
		eple: 'Eple',
		kiwi: 'Kiwi'
	},
	SkjermleserKommandoer: {
		overskrift: 'Skjermleserkommandoer',
		voiceover: {
			label: 'Voiceover',
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
					value: 'Piltaster navigere og Enter for å velge'
				}
			]
		},
		narrator: {
			label: 'Narrator',
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
			'Lyren sies å kunne stilne krig og forvrenge skjeben selv, men én lov står fast: Ingen dødelig skal trå inn i tempelet uten guddommelig kall.',
			'Du trosset varselet, du gikk inn. Slik falt dommen. Mørket tok deg, og du ble sendt til underverdenen - et sted der sjeler vandrer i evig skygge.',
			'Men alt håp er ikke tapt. Gudene er lunefulle, men ikke døve for mot. Du har én sjanse: Bevis din verdighet ved å fullføre prøvelsene de har lagt foran deg. Kunnskap, styrke og klokskap vil føre deg gjennom mørket.'
		],
		mal: 'Finn veien gjennom prøvelsene gudene har lagt foran deg. Vinn tilbake deres gunst, gjennopprett balansen, kom tilbake til de levendes verden - og finn Apollos Lyre.'
	},
	Sekken: {
		overskrift: 'Sekken',
		tomt: 'Tomt...',
		Krukke: 'Krukke',
		Pergament: 'Pergament',
		Sverd: 'Sverd',
		Hjelm: 'Hjelm'
	},
	kode: {
		feil: 'Koden er feil!',
		rett: 'Koden er riktig!',
		videre: 'Gå videre',
		provKoden: 'Prøv koden'
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
		gave: 'Venus gir eg en keramikkrukke som du kan ta med deg på vegen videre. (Du finner den i sekken)'
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
		gave: 'Mars gir deg et sverd som du kan ta med deg på vegen videre. (Du finner det i sekken)'
	},
	Minerva: {
		title: 'uu spill - Minerva',
		overskrift: 'En gåte fra Minerva',
		oppgave:
			'Minerva møter deg og viser deg veien til et rom med tre statuer. Statuene er av gudene Apollo, Merkur og Mars. Hver statue holder en tavle, der en er sannferdig, en lyver, og en kan vi ikke vite om sier sannhet eller løgn.',
		bilder: [
			'Statue av Mars. Statuen holder en steintavle der det står: "Merkur er den sannferdige"',
			'Statue av Merkur. Statuen holder en steintavle der det står: "Jeg er ikke sannferdig"',
			'Statue av Apollo. Statuen holder en steintavle der det står: "Merkur er løgneren"'
		],
		oppgaveLabel: 'Hvem er den sannferdige?',
		tidsstraff: 'Du får timeout i 30 sekunder for feil svar.',
		gave: 'Minerva gir deg en hjelm som du kan ta med deg på vegen videre. (Du finner den i sekken)'
	},
	Neptun: {
		title: 'uu spill - Neptun',
		overskrift: 'En gåte fra Neptun',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		tidsstraff: 'Du får timeout i 30 sekunder for feil svar.',
		gave: ''
	},
	Merkur: {
		title: 'uu spill - Merkur',
		overskrift: 'En gåte fra Merkur',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		gave: ''
	},
	Pluto: {
		title: 'uu spill - Pluto',
		overskrift: 'En gåte fra Pluto',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		gave: ''
	},
	Jupiter: {
		title: 'uu spill - Jupiter',
		overskrift: 'En gåte fra Jupiter',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		gave: ''
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
		overskrift: 'Test screen reader',
		info: 'Try it out with a screen reader',
		checkbox: 'Checkbox',
		bildeAlt: '3 blueberries',
		tekstfeltLabel: 'What is in the picture?',
		alert: 'You have answered',
		knapp: 'Answer',
		tabell: 'Fruit',
		tabellFrukt: 'Fruit',
		tabellPris: 'Price per kg',
		beholdning: 'Stock',
		banan: 'Banana',
		eple: 'Apple',
		kiwi: 'Kiwi'
	},
	SkjermleserKommandoer: {
		overskrift: 'Screen reader commands',
		voiceover: {
			label: 'Voiceover',
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
		Krukke: 'Jar',
		Pergament: 'Parchment',
		Sverd: 'Sword',
		Hjelm: 'Helmet'
	},
	kode: {
		feil: 'The code is incorrect!',
		rett: 'The code is correct!',
		videre: 'Go further',
		provKoden: 'Try the code'
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
		gave: 'Mars gives you a sword that you can take with you on your journey. (You will find it in your backpack)'
	},
	Minerva: {
		title: 'uu spill - Minerva',
		overskrift: 'A riddle from Minerva',
		oppgave:
			'Minerva meets you and shows you the way to a room with three statues. The statues are of the gods Apollo, Mercury, and Mars. Each statue holds a tablet, one is truthful, one lies, and one we cannot know if it speaks truth or lies.',
		gaate: 'The first statue is Apollo, the tablet says Mercury is the truthful one. By Mercury\'s tablet it says: "I am not truthful". By Mars\' tablet it says that Mercury is the liar.',
		bilder: [
			'Statue of Mars. The statue holds a stone tablet that says: "Mercury is the truthful one"',
			'Statue of Mercury. The statue holds a stone tablet that says: "I am not truthful"',
			'Statue of Apollo. The statue holds a stone tablet that says: "Mercury is the liar"'
		],
		oppgaveLabel: 'Who is the truthful one?',
		tidsstraff:
			'You will get a timeout of 30 seconds for an incorrect answer.',
		gave: 'Minerva gives you a helmet that you can take with you on your journey. (You will find it in your backpack)'
	},
	Neptun: {
		title: 'uu game - Neptun',
		overskrift: 'A riddle from Neptune',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		tidsstraff:
			'You will get a timeout of 30 seconds for an incorrect answer.',
		gave: ''
	},
	Merkur: {
		title: 'uu game - Mercury',
		overskrift: 'A riddle from Mercury',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		gave: ''
	},
	Pluto: {
		title: 'uu game - Pluto',
		overskrift: 'A riddle from Pluto',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		gave: ''
	},
	Jupiter: {
		title: 'uu game - Jupiter',
		overskrift: 'A riddle from Jupiter',
		oppgave: '',
		oppgaveLabel: '',
		hint: '',
		gave: ''
	}
} as const

export type Language = 'norsk' | 'engelsk'
export type Texts = typeof no | typeof en

export default getTexts
