import { BodyLong, TextField } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { merkurUrl } from '../../constants'
import { useKode } from '../useKode'

export const Neptun = () => {
	const { text } = useAppContext()
	const t = text.Minerva

	const { kode, harRiktigKode, setKode, brukKode } = useKode(
		[''],
		'Merkur'
	)

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
						description={t.tidsstraff}
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
				nesteUrl={merkurUrl}
			/>
		</OppgaveWrapper>
	)
}
