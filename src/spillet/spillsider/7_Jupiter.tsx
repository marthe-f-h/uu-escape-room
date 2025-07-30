import { BodyLong } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { sluttenUrl } from '../../constants'
import { useKode } from '../useKode'
import { Guder } from '../utils'

export const Jupiter = () => {
	const { text } = useAppContext()
	const t = text.Jupiter

	const { kode, harRiktigKode, fryst, setKode, brukKode } = useKode(
		['2,4,6,8', '1,2,3,4,6,7,8,9'],
		'Jupiter',
		true
	)

	const toggleRute = (
		checked: boolean,
		value: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
	) => {
		if (checked) {
			setKode((prev) => {
				const nyKode = prev.length === 0 ? value : `${prev},${value}`
				return nyKode.split(',').sort().join(',')
			})
		} else {
			const nyKode = kode
				.split(',')
				.filter((v) => v !== value)
				.sort()
				.join(',')
			setKode(nyKode)
		}
	}

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			gud={Guder.Jupiter}
		>
			<div>
				<BodyLong className="mb-4">{t.oppgave[0]}</BodyLong>
				<BodyLong className="mb-4">{t.oppgave[1]}</BodyLong>
				<BodyLong className="mb-4 sr-only">{t.oppgave[2]}</BodyLong>

				<div className="rounded-full w-[19rem] max-w-md aspect-square bg-[#2a2c34] mb-4 flex items-center justify-center">
					<div className="grid grid-cols-3 gap-px bg-[#ffe1aa] text-[#ffe1aa] w-fit border border-[#ffe1aa]">
						<SquareToggle
							value="1"
							label="1"
							checked={kode.split(',').includes('1')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="2"
							label="2"
							checked={kode.split(',').includes('2')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="3"
							label="3"
							checked={kode.split(',').includes('3')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="4"
							label="4"
							checked={kode.split(',').includes('4')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="5"
							label="5"
							checked={kode.split(',').includes('5')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="6"
							label="6"
							checked={kode.split(',').includes('6')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="7"
							label="7"
							checked={kode.split(',').includes('7')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="8"
							label="8"
							checked={kode.split(',').includes('8')}
							onChange={toggleRute}
						/>
						<SquareToggle
							value="9"
							label="9"
							checked={kode.split(',').includes('9')}
							onChange={toggleRute}
						/>
					</div>
				</div>

				<BodyLong aria-live="polite" aria-atomic>
					{t.kodeVisning} {kode.split(',').join(', ')}
				</BodyLong>

				<BodyLong size="small" className="mt-4">
					{text.kode.tidsstraff}
				</BodyLong>

				<button
					className="mt-2 gold-button"
					disabled={fryst}
					onClick={() => brukKode()}
				>
					{text.kode.provKoden}
				</button>
			</div>

			<ResultatBox
				harRiktigKode={harRiktigKode}
				gave={t.gave}
				nesteUrl={sluttenUrl}
				feilmelding={t.feilmelding}
			/>
		</OppgaveWrapper>
	)
}

type Props<T extends string> = {
	value: T
	label: string
	checked: boolean
	onChange: (checked: boolean, value: T) => void
}

export const SquareToggle = <T extends string>({
	value,
	label,
	checked,
	onChange
}: Props<T>) => {
	return (
		<button
			role="checkbox"
			aria-checked={checked}
			aria-label={label}
			onClick={() => onChange(!checked, value)}
			className={`cursor-pointer w-[4rem] aspect-square transition-colors duration-200 ${
				checked ? 'bg-[#ffe1aa]' : 'bg-[#2a2c34]'
			}`}
		/>
	)
}
