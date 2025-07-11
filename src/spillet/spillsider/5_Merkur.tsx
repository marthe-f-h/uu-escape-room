import { BodyLong, TextField } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { plutoUrl } from '../../constants'
import { useKode } from '../useKode'

export const Merkur = () => {
	const { text } = useAppContext()
	const t = text.Merkur

	const { kode, harRiktigKode, setKode, brukKode } = useKode([''], 'Pluto')

	return (
		<OppgaveWrapper title={t.title} overskrift={t.overskrift}>
			<div>
				<BodyLong className="mb-4">{t.oppgave}</BodyLong>

				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode()
					}}
				>
					<TextField
						label={t.oppgaveLabel}
						size="small"
						className="w-[10rem]"
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
				gave={t.gave}
				nesteUrl={plutoUrl}
			/>
		</OppgaveWrapper>
	)
}
