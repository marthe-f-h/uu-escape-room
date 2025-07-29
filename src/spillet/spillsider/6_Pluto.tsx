import { BodyLong, CheckboxGroup } from '@navikt/ds-react'
import { useState } from 'react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { jupiterUrl } from '../../constants'
import type { Texts } from '../../texts'
import { useKode } from '../useKode'
import { Guder } from '../utils'

export const Pluto = () => {
	const { text } = useAppContext()
	const t = text.Pluto

	const [valgt, setValgteMynter] = useState<string[]>([])
	const { harRiktigKode, fryst, setKode, brukKode } = useKode(
		['ii'],
		'Jupiter',
		true
	)

	const velgMynter = (
		checked: boolean,
		value: '1' | '2' | '3' | '4' | '5' | '6'
	) => {
		let nyValgt = [...valgt]
		if (checked) {
			nyValgt.push(value)
		} else {
			nyValgt = nyValgt.filter((v) => v !== value)
		}
		setValgteMynter(nyValgt)

		if (nyValgt.length === 2) {
			const harKunEkteMynter = nyValgt.every(
				(mynt) => mynt !== '2' && mynt !== '3' && mynt !== '5'
			)

			setKode(harKunEkteMynter ? 'ii' : '')
		} else {
			setKode('')
		}
	}

	return (
		<OppgaveWrapper
			title={t.title}
			overskrift={t.overskrift}
			gud={Guder.Pluto}
			hints={[t.hint]}
		>
			<div>
				<BodyLong className="mb-4">{t.oppgave[0]}</BodyLong>
				<BodyLong className="mb-4">{t.oppgave[1]}</BodyLong>

				<CheckboxGroup
					legend={t.oppgaveLabel}
					description={text.kode.tidsstraff}
					size="small"
				>
					<div className="flex flex-wrap gap-4">
						<Coin
							value="1"
							checked={valgt.includes('1')}
							onChange={velgMynter}
							t={t}
						/>
						<Coin
							value="2"
							fake
							checked={valgt.includes('2')}
							onChange={velgMynter}
							t={t}
						/>
						<Coin
							value="3"
							fake
							checked={valgt.includes('3')}
							onChange={velgMynter}
							t={t}
						/>
						<Coin
							value="4"
							checked={valgt.includes('4')}
							onChange={velgMynter}
							t={t}
						/>
						<Coin
							value="5"
							fake
							checked={valgt.includes('5')}
							onChange={velgMynter}
							t={t}
						/>
						<Coin
							value="6"
							checked={valgt.includes('6')}
							onChange={velgMynter}
							t={t}
						/>
					</div>
				</CheckboxGroup>

				<button
					className="mt-4 gold-button"
					onClick={() => brukKode()}
					disabled={fryst}
				>
					{t.knapp}
				</button>
			</div>

			<ResultatBox
				harRiktigKode={harRiktigKode}
				gave={t.gave}
				nesteUrl={jupiterUrl}
				feilmelding={t.feilmelding}
			/>
		</OppgaveWrapper>
	)
}

const Coin = <T extends string>({
	value,
	checked,
	fake = false,
	t,
	onChange
}: {
	value: T
	checked: boolean
	fake?: boolean
	t: Texts['Pluto']
	onChange: (checked: boolean, value: T) => void
}) => (
	<button
		role="checkbox"
		aria-checked={checked}
		aria-label={fake ? t.lettMynt : t.tungMynt}
		onClick={() => onChange(!checked, value)}
		className={`cursor-pointer rounded-full w-[2rem] h-[2rem] max-w-md aspect-square bg-[#ce8820] transition-border duration-200 border-4 ${
			checked ? 'border-[#121856]' : 'border-[#ce8820]'
		}`}
	/>
)
