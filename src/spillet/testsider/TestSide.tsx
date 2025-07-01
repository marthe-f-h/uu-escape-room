import {
	Alert,
	BodyShort,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Table,
	TextField
} from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import img from './blueberry.png'
import { useAppContext } from '../../AppContext'

export const TestSide = () => {
	const [visAlert, setVisAlert] = useState(false)
	const headingRef = useRef<HTMLHeadingElement>(null)
  const t = useAppContext().text.TestSide

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="flex flex-col gap-4 bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<Heading
				level="1"
				size="medium"
				className="outline-none"
				tabIndex={-1}
				ref={headingRef}
			>
				{t.overskrift}
			</Heading>

			<BodyShort>{t.info}</BodyShort>

			<div>
				<CheckboxGroup legend={t.checkbox} size="small">
					<Checkbox value="car">1</Checkbox>
					<Checkbox value="taxi">2</Checkbox>
				</CheckboxGroup>
			</div>

			<img src={img} alt={t.bildeAlt} className="w-6"></img>

			<TextField
				label={t.tekstfeltLabel}
				size="small"
				className="w-[24rem]"
			/>

			<Button
				size="small"
				className="w-fit"
				onClick={() => setVisAlert(!visAlert)}
			>
				{t.knapp}
			</Button>

			{visAlert && (
				<Alert size="small" variant="info" role="alert">
					{t.alert}
				</Alert>
			)}

			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell scope="col">
							{t.tabell}
						</Table.HeaderCell>
						<Table.HeaderCell scope="col">
							{t.tabellPris}
						</Table.HeaderCell>
						<Table.HeaderCell scope="col">
							{t.beholdning}
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.HeaderCell scope="row">
							{t.banan}
						</Table.HeaderCell>
						<Table.DataCell>16 kr</Table.DataCell>
						<Table.DataCell>0</Table.DataCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell scope="row">
							{t.eple}
						</Table.HeaderCell>
						<Table.DataCell>22 kr</Table.DataCell>
						<Table.DataCell>20</Table.DataCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell scope="row">
							{t.kiwi}
						</Table.HeaderCell>
						<Table.DataCell>24 kr</Table.DataCell>
						<Table.DataCell>10</Table.DataCell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	)
}
