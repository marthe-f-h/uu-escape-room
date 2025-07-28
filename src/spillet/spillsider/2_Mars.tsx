import { BodyLong, Table, TextField } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { minervaUrl } from '../../constants'
import { useKode } from '../useKode'
import { Guder } from '../utils'

export const Mars = () => {
	const { text } = useAppContext()
	const t = text.Mars

	const { kode, harRiktigKode, setKode, brukKode } = useKode(
		['vii'],
		'Minerva'
	)

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			hints={[t.hint, t.hint2]}
			gud={Guder.Mars}
		>
			<div>
				<BodyLong className="mb-4">{t.oppgave}</BodyLong>

				<Table size="small" className="mb-4 blur">
					<Table.Header>
						<Table.Row>
							{t.tabellHeadere.map((header, index) => (
								<Table.HeaderCell scope="col" key={index}>
									{header}
								</Table.HeaderCell>
							))}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{t.tabellData.map((row, index) => (
							<Table.Row key={index}>
								<Table.HeaderCell scope="row">
									{row.slag}
								</Table.HeaderCell>
								<Table.DataCell>{row.legion}</Table.DataCell>
								<Table.DataCell>{row.utfall}</Table.DataCell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>

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
				nesteUrl={minervaUrl}
			/>
		</OppgaveWrapper>
	)
}
