const getTexts = (language: Language) => {
	return language === 'norsk' ? no : en
}

const no = {
	Velkomstside: {
		velkommen: 'Velkommen til Escape Room - Gudenes gunst!',
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
		overskrift: 'Nyttige skjermleserkommandoer',
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
	}
} as const

const en = {
	Velkomstside: {
		velkommen: 'Welcome to Escape Room - Favor of the Gods!',
		test: 'Test screen reader',
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
		overskrift: 'Useful screen reader commands',
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
	}
} as const

export type Language = 'norsk' | 'engelsk'
export type Texts = typeof no | typeof en

export default getTexts