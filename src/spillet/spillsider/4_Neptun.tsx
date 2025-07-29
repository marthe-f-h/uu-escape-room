import { BodyLong, Heading } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { merkurUrl } from '../../constants'
import { useKode } from '../useKode'
import { Guder } from '../utils'
import { ButtonCell } from '../../components/ButtonCell'

export const Neptun = () => {
	const { text } = useAppContext()
	const t = text.Neptun

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
		} else {
			const nyKode =
				kode.split(',').length < 3
					? kode.concat(`,${value}`)
					: kode.split(',').slice(1).concat(value).join(',')
			setKode(nyKode)

			if (nyKode.split(',').length === 3) {
				brukKode(nyKode)
			}
		}
	}

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			hints={[t.hint]}
			gud={Guder.Neptun}
		>
			<div>
				<BodyLong className="mb-4">{t.oppgave[0]}</BodyLong>
				<BodyLong className="sr-only">{t.oppgave[1]}</BodyLong>

				<div className="rounded-full w-[18rem] max-w-md aspect-square bg-[#4b3e2a] mb-4 flex items-center justify-center">
					<div className="grid grid-cols-3 gap-px bg-[#ffe1aa] text-[#ffe1aa] w-fit">
						<ButtonCell
							label="i (1)"
							value="i"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="ii (2)"
							value="ii"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="iii (3)"
							value="iii"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="iv (4)"
							value="iv"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="v (5)"
							value="v"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="vi (6)"
							value="vi"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="vii (7)"
							value="vii"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="viii (8)"
							value="viii"
							onClick={registrerTrykk}
						/>
						<ButtonCell
							label="ix (9)"
							value="ix"
							onClick={registrerTrykk}
						/>
					</div>
				</div>

				<div className="sr-only">
					<Heading size="small" level="2">
						Hint
					</Heading>
					<BodyLong className="sr-only">{t.oppgaveLabel}</BodyLong>
				</div>

				<BodyLong aria-live="polite" aria-atomic>
					{t.kodeVisning} {kode.split(',').join(', ')}
				</BodyLong>
			</div>

			<ResultatBox
				harRiktigKode={harRiktigKode}
				gave={t.gave}
				nesteUrl={merkurUrl}
			/>
		</OppgaveWrapper>
	)
}
