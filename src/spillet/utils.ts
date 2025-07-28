export const SekkBeholdingTyper = {
	Krukke: 'Krukke',
	Sverd: 'Sverd',
	Pergament: 'Pergament',
	Hjelm: 'Hjelm'
} as const

export type SekkBeholdingType =
	(typeof SekkBeholdingTyper)[keyof typeof SekkBeholdingTyper]

export const Guder = {
	Venus: 'Venus',
	Mars: 'Mars',
	Minerva: 'Minerva',
	Neptun: 'Neptun',
	Pluto: 'Pluto',
	Merkur: 'Merkur',
	Jupiter: 'Jupiter'
} as const

export type Gud = (typeof Guder)[keyof typeof Guder]

export const getBeholdning = (oppgave: Gud): SekkBeholdingType[] => {
	switch (oppgave) {
		case 'Venus':
			return []
		case 'Mars':
			return [SekkBeholdingTyper.Krukke]
		case 'Minerva':
			return [SekkBeholdingTyper.Krukke, SekkBeholdingTyper.Sverd]
		case 'Neptun':
			return [
				SekkBeholdingTyper.Krukke,
				SekkBeholdingTyper.Sverd,
				SekkBeholdingTyper.Pergament
			]
		case 'Pluto':
			return [
				SekkBeholdingTyper.Krukke,
				SekkBeholdingTyper.Sverd,
				SekkBeholdingTyper.Pergament,
				SekkBeholdingTyper.Hjelm
			]
		case 'Merkur':
			return [
				SekkBeholdingTyper.Krukke,
				SekkBeholdingTyper.Sverd,
				SekkBeholdingTyper.Pergament,
				SekkBeholdingTyper.Hjelm
				// TODO
			]
		case 'Jupiter':
			return [
				SekkBeholdingTyper.Krukke,
				SekkBeholdingTyper.Sverd,
				SekkBeholdingTyper.Pergament,
				SekkBeholdingTyper.Hjelm
				// TODO
			]
	}
}