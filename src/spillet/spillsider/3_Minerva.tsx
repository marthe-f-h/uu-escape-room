import { BodyLong, TextField } from '@navikt/ds-react'
import { useAppContext } from '../../AppContext'
import { OppgaveWrapper } from '../../components/OppgaveWrapper'
import { ResultatBox } from '../../components/ResultatBox'
import { neptunUrl } from '../../constants'
import imgApollo from '../bilder/Apollo.png'
import imgMars from '../bilder/Mars.png'
import imgMerkur from '../bilder/Merkur.jpg'
import { useKode } from '../useKode'
import { Guder } from '../utils'

export const Minerva = () => {
	const { text } = useAppContext()
	const t = text.Minerva

	const { kode, harRiktigKode, fryst, setKode, brukKode } = useKode(
		['apollo'],
		'Neptun',
		true
	)

	return (
    <OppgaveWrapper title={t.title} overskrift={t.overskrift} gud={Guder.Minerva}>
      <div>
        <BodyLong className="mb-4">{t.oppgave}</BodyLong>

        <div className="flex flex-wrap mb-4">
          <img src={imgMars} className="h-[10rem]" alt={t.bilder[0]} />
          <img src={imgMerkur} alt={t.bilder[1]} className="h-[10rem]" />
          <img src={imgApollo} className="h-[10rem] ml-[-1px]" alt={t.bilder[2]} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            brukKode()
          }}
        >
          <TextField
            label={t.oppgaveLabel}
            description={text.kode.tidsstraff}
            size="small"
            className="w-[18rem]"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
          />
          <button className="mt-4 gold-button" disabled={fryst}>
            {text.kode.provKoden}
          </button>
        </form>
      </div>

      <ResultatBox
        harRiktigKode={harRiktigKode}
        gave={t.gave}
        nesteUrl={neptunUrl}
        fryst={fryst}
      />
    </OppgaveWrapper>
  )
}
