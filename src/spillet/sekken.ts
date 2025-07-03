export const SekkBeholdingTyper = {
	Krukke: 'Krukke',
	Sverd: 'Sverd',
	Pergament: 'Pergament',
	Hjelm: 'Hjelm'
} as const

export type SekkBeholdingType =
	(typeof SekkBeholdingTyper)[keyof typeof SekkBeholdingTyper]

export const getBeholdning = (
	oppgave:
		| 'Venus'
		| 'Mars'
		| 'Jupiter'
		| 'Neptun'
		| 'Pluto'
		| 'Minerva'
		| 'Merkur'
): SekkBeholdingType[] => {
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