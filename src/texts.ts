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
		gave: 'Venus gir eg en keramikkkurkke som du kan ta med deg på vegen videre. (Du finner den i sekken)'
	},
	Mars: {
		title: 'uu spill - Mars',
		overskrift: 'En gåte fra Mars',
		oppgave: ['TODO tabell'],
		oppgaveLabel: 'Hvor mange seiere har legionen til Mars?',
		gave: 'Mars gir deg et sverd som du kan ta med deg på vegen videre. (Du finner det i sekken)'
	},
	Sekken: {
		overskrift: 'Sekken',
		tomt: 'Tomt...',
		Krukke: 'Krukke',
		Pergament: 'Pergament',
		Sverd: 'Sverd'
	},
	kode: {
		feil: 'Koden er feil!',
		rett: 'Koden er riktig!',
		videre: 'Gå videre',
		provKoden: 'Prøv koden'
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
		gave: 'Venus gives you a ceramic jar that you can take with you on your journey. (You will find it in your backpack)'
	},
	Mars: {
		title: 'uu spill - Mars',
		overskrift: 'A riddle from Mars',
		oppgave: ['TODO tabel'],
		oppgaveLabel: 'How many victories does the Legion of Mars have?',
		gave: 'Mars gives you a sword that you can take with you on your journey. (You will find it in your backpack)'
	},
	Sekken: {
		overskrift: 'Backpack',
		tomt: 'Empty...',
		Krukke: 'Jar',
		Pergament: 'Parchment',
		Sverd: 'Sword'
	},
	kode: {
		feil: 'The code is incorrect!',
		rett: 'The code is correct!',
		videre: 'Go further',
		provKoden: 'Try the code'
	}
} as const

export type Language = 'norsk' | 'engelsk'
export type Texts = typeof no | typeof en

export default getTexts
