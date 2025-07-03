import { BodyLong, TextField } from '@navikt/ds-react'
import { useEffect, useState } from 'react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { minervaUrl } from '../../constants'
import { getBeholdning } from '../sekken'

export const Minerva = () => {
	const { text, setSekkBeholdning } = useAppContext()
	const t = text.Minerva

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = (testKode: string) => {
		const harRiktigKode = testKode.trim().toLocaleLowerCase() === 'mars'
		if (harRiktigKode) {
			setSekkBeholdning(getBeholdning('Minerva'))
		}
		setHarRiktigKode(harRiktigKode)
	}

	useEffect(() => {
		setSekkBeholdning(getBeholdning('Minerva'))
	}, [setSekkBeholdning])

	return (
		<OppgaveWrapper title={t.title} overskrift={t.overskrift}>
			<div>
				<BodyLong className="mb-4">
					{t.oppgave}
				</BodyLong>

				<BodyLong className="mb-4">
					{t.gaate}
				</BodyLong>

				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode(kode)
					}}
				>
					<TextField
						label={t.oppgaveLabel}
						size="small"
						className="w-[20rem]"
						value={kode}
						onChange={(e) => setKode(e.target.value)}
					/>
					<button className="mt-4 gold-button">
						{text.kode.provKoden}
					</button>
				</form>
			</div>

			<ResultatBox
				harRiktigKode={harRiktigKode}
				text={text}
				gave={t.gave}
				nesteUrl={minervaUrl}
			/>
		</OppgaveWrapper>
	)
}
