import { BodyLong, CheckboxGroup } from '@navikt/ds-react'
import { useState } from 'react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { jupiterUrl } from '../../constants'
import type { Texts } from '../../texts'
import { useKode } from '../useKode'
import { Guder } from '../utils'

const erFalsk = (mynt: string) => mynt === '2' || mynt === '3' || mynt === '5'

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
      const harKunEkteMynter = nyValgt.every((mynt) => !erFalsk(mynt))

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
            {(['1', '2', '3', '4', '5', '6'] as const).map((value) => (
              <Coin
                key={`pluto-${value}`}
                value={value}
                fake={erFalsk(value)}
                checked={valgt.includes(value)}
                onChange={velgMynter}
                t={t}
              />
            ))}
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
        fryst={fryst}
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
    className={`cursor-pointer rounded-full w-[3rem] h-[3rem] max-w-md aspect-square  bg-[#827f7c] transition-border duration-200 border-5 ${
      checked ? 'border-[#2a2c34]' : 'border-[#827f7c]'
    }`}
  />
)
