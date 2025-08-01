import { useState } from 'react'
import { useAppContext } from '../AppContext'
import { getBeholdning, type Gud } from './utils'

export const useKode = (
	losning: string[],
	nesteGud: Gud,
	brukTimeout?: boolean,
	fjernFeilmelding: boolean = true
) => {
	const { setSekkBeholdning } = useAppContext()

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()
  const [fryst, setFryst] = useState<boolean>()

	const brukKode = (nyesteKode?: string) => {
		const harRiktigKode = losning.some(
			(l) => l === (nyesteKode || kode).trim().toLowerCase()
		)

		if (harRiktigKode) {
			setSekkBeholdning(getBeholdning(nesteGud))
		}
		setHarRiktigKode(harRiktigKode)

		if (!harRiktigKode && brukTimeout) {
			setFryst(true)
			setTimeout(() => {
				setFryst(false)
			}, 20 * 1000)
		}

		if (fjernFeilmelding) {
			setTimeout(() => {
				if (!harRiktigKode) {
					setHarRiktigKode(undefined)
				}
			}, 3 * 1000)
		}
	}

	return { kode, harRiktigKode, fryst, setKode, brukKode }
}
