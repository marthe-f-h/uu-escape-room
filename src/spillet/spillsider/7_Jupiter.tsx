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
    ['1,2,3,4,6,7,8,9'],
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
    <OppgaveWrapper title={t.title} overskrift={t.overskrift} gud={Guder.Jupiter}>
      <div>
        <BodyLong className="mb-4">{t.oppgave[0]}</BodyLong>
        <BodyLong className="mb-4">{t.oppgave[1]}</BodyLong>
        <BodyLong className="mb-4 sr-only">{t.oppgave[2]}</BodyLong>

        <div className="rounded-full w-[19rem] max-w-md aspect-square bg-[#2a2c34] mb-4 flex items-center justify-center">
          <div className="grid grid-cols-3 w-fit border-2 border-[#ffe1aa] rounded-full overflow-hidden">
            {(['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const).map(
              (value) => (
                <SquareToggle
                  key={`jupiter-${value}`}
                  value={value}
                  checked={kode.split(',').includes(value)}
                  toggle={toggleRute}
                />
              )
            )}
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
        fryst={fryst}
      />
    </OppgaveWrapper>
  )
}

type Props<T extends string> = {
  value: T
  checked: boolean
  toggle: (checked: boolean, value: T) => void
}

export const SquareToggle = <T extends string>({
  value,
  checked,
  toggle: onChange
}: Props<T>) => {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      aria-label={value}
      onClick={() => onChange(!checked, value)}
      className={`cursor-pointer m-[-2px] border border-[#ffe1aa] w-[5rem] aspect-square transition-colors duration-200 ${
        checked ? 'bg-[#ffe1aa]' : 'bg-[#2a2c34]'
      }`}
    />
  )
}
