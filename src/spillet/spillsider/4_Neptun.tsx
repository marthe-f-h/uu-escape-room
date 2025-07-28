import { BodyLong, Heading } from '@navikt/ds-react'
import { useEffect } from 'react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { merkurUrl } from '../../constants'
import { useKode } from '../useKode'
import { Guder } from '../utils'

export const Neptun = () => {
	const { text } = useAppContext()
	const t = text.Neptun

	useEffect(() => {}, [])

	const { kode, harRiktigKode, setKode, brukKode } = useKode(
		['v,v,v'],
		'Merkur',
		false,
		false
	)

	const registrerTrykk = (
		value: 'i' | 'ii' | 'iii' | 'iv' | 'v' | 'vi' | 'vii' | 'viii' | 'ix'
	) => {
		if (kode.length === 0) {
			setKode(value)
		} else if (kode.split(',').length < 3) {
			setKode(kode.concat(`,${value}`))
		} else {
			const nyKode = kode.split(',').slice(1).concat(value)
			setKode(nyKode.join(','))
		}
	}

	useEffect(() => {
		if (kode.split(',').length === 3) {
			brukKode()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [kode])

	const Cell = ({
		vale,
		label
	}: {
		vale: 'i' | 'ii' | 'iii' | 'iv' | 'v' | 'vi' | 'vii' | 'viii' | 'ix'
		label: string
	}) => (
		<button
			aria-label={label}
			className="cursor-pointer bg-[#4b3e2a] w-[4rem] aspect-square p-4 flex items-center justify-center"
			onClick={() => registrerTrykk(vale)}
		>
			{vale}
		</button>
	)

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			hints={[t.hint]}
			gud={Guder.Neptun}
		>
			<div>
				<BodyLong className="mb-4">{t.oppgave}</BodyLong>

				<div className="rounded-full w-[18rem] max-w-md aspect-square bg-[#4b3e2a] mb-4 flex items-center justify-center">
					<div className="grid grid-cols-3 gap-px bg-[#ffe1aa] text-[#ffe1aa] w-fit">
						<Cell label="i (1)" vale="i" />
						<Cell label="ii (2)" vale="ii" />
						<Cell label="iii (3)" vale="iii" />
						<Cell label="iv (4)" vale="iv" />
						<Cell label="v (5)" vale="v" />
						<Cell label="vi (6)" vale="vi" />
						<Cell label="vii (7)" vale="vii" />
						<Cell label="viii (8)" vale="viii" />
						<Cell label="ix (9)" vale="ix" />
					</div>
				</div>

				<div className="sr-only">
					<Heading size="small" level="2">
						Hint
					</Heading>
					<BodyLong className="sr-only">{t.oppgaveLabel}</BodyLong>
				</div>
			</div>

			<ResultatBox
				harRiktigKode={harRiktigKode}
				gave={t.gave}
				nesteUrl={merkurUrl}
			/>
		</OppgaveWrapper>
	)
}
