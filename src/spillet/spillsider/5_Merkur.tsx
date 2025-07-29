import { BodyLong, Radio, RadioGroup } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { plutoUrl } from '../../constants'
import { useKode } from '../useKode'
import { Guder } from '../utils'

export const Merkur = () => {
	const { text } = useAppContext()
	const t = text.Merkur

	const { kode, harRiktigKode, fryst, setKode, brukKode } = useKode(
		['vidi'],
		'Pluto',
		true
	)

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			gud={Guder.Merkur}
			hints={[t.hint]}
		>
			<div>
				<BodyLong className="mb-4">{t.oppgave[0]}</BodyLong>
				<BodyLong className="mb-4 blur">{t.oppgave[1]}</BodyLong>

				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode()
					}}
				>
					<RadioGroup
						legend={t.oppgaveLabel}
						description={text.kode.tidsstraff}
						className="blur"
						onChange={setKode}
						value={kode}
						size="small"
					>
						<Radio value="vini">Vini</Radio>
						<Radio value="vidi">Vidi</Radio>
						<Radio value="vici">Vici</Radio>
					</RadioGroup>
					<button className="mt-4 gold-button" disabled={fryst}>
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
