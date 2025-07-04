import { useState } from 'react'
import { useAppContext } from '../AppContext'
import { getBeholdning, type Gud } from './sekken'

export const useKode = (losning: string[], nesteGud: Gud) => {
	const { setSekkBeholdning } = useAppContext()

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = () => {
		const harRiktigKode = losning.some(
			(l) => l === kode.trim().toLowerCase()
		)

		if (harRiktigKode) {
			setSekkBeholdning(getBeholdning(nesteGud))
		}
		setHarRiktigKode(harRiktigKode)

		setTimeout(() => {
			if (!harRiktigKode) {
				setHarRiktigKode(undefined)
			}
		}, 3 * 1000)
	}

	return { kode, harRiktigKode, setKode, brukKode }
}
