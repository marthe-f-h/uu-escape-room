import { BodyLong, TextField } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { jupiterUrl } from '../../constants'
import { useKode } from '../useKode'
import { Guder } from '../utils'

export const Pluto = () => {
	const { text } = useAppContext()
	const t = text.Pluto

	const { kode, harRiktigKode, setKode, brukKode } = useKode([''], 'Jupiter')

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			gud={Guder.Pluto}
		>
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
				nesteUrl={jupiterUrl}
			/>
		</OppgaveWrapper>
	)
}
