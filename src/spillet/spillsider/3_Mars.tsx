import { BodyLong, Table, TextField } from '@navikt/ds-react'
import { useEffect, useState } from 'react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { minervaUrl } from '../../constants'
import { getBeholdning } from '../sekken'

export const Mars = () => {
	const { text, setSekkBeholdning } = useAppContext()
	const t = text.Mars

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = (testKode: string) => {
		const harRiktigKode = testKode.trim().toLocaleLowerCase() === 'vii'
		if (harRiktigKode) {
			setSekkBeholdning(getBeholdning('Minerva'))
		}
		setHarRiktigKode(harRiktigKode)
	}

	useEffect(() => {
		setSekkBeholdning(getBeholdning('Mars'))
	}, [setSekkBeholdning])

	return (
		<OppgaveWrapper title={t.title} overskrift={t.overskrift}>
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
