export const SekkBeholdingTyper = {
	Krukke: 'Krukke',
	Pergament: 'Pergament',
	Sverd: 'Sverd'
} as const

export type SekkBeholdingType =
	(typeof SekkBeholdingTyper)[keyof typeof SekkBeholdingTyper]