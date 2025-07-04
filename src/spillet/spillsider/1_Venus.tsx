import { BodyLong, Heading, TextField } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { marsUrl } from '../../constants'
import { useKode } from '../useKode'

export const Venus = () => {
	const { text } = useAppContext()
	const t = text.Venus

	const { kode, harRiktigKode, setKode, brukKode } = useKode(
		['lyset', 'fbsat'],
		'Mars'
	)

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			hints={[t.hint, t.hint2]}
		>
			<div>
				<BodyLong className="whitespace-pre-wrap mb-4">
					{t.oppgave.join('\r\n')}
				</BodyLong>
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

				<div className="sr-only">
					<Heading size="small" level="2">
						Hint
					</Heading>
					<BodyLong className="mt-4">{t.hint}</BodyLong>
				</div>
			</div>

			<ResultatBox
				harRiktigKode={harRiktigKode}
				gave={t.gave}
				nesteUrl={marsUrl}
			/>
		</OppgaveWrapper>
	)
}
