import { useState } from 'react'
import { useAppContext } from '../AppContext'
import { getBeholdning, type Gud } from './sekken'

export const useKode = (
	losning: string[],
	nesteGud: Gud,
	brukTimeout?: boolean
) => {
	const { setSekkBeholdning } = useAppContext()

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()
	const [fryst, setFryst] = useState<boolean>(false)

	const brukKode = () => {
		const harRiktigKode = losning.some(
			(l) => l === kode.trim().toLowerCase()
		)

		if (harRiktigKode) {
			setSekkBeholdning(getBeholdning(nesteGud))
		}
		setHarRiktigKode(harRiktigKode)

		if (!harRiktigKode && brukTimeout) {
			setFryst(true)
			setTimeout(() => {
				setFryst(false)
			}, 30 * 1000)
		}

		setTimeout(() => {
			if (!harRiktigKode) {
				setHarRiktigKode(undefined)
			}
		}, 3 * 1000)
	}

	return { kode, harRiktigKode, fryst, setKode, brukKode }
}
