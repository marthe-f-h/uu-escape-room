import { Alert, BodyShort, Button, Heading } from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../../AppContext'
import img from './blueberry.png'
import { RockingHorseIcon } from '@navikt/aksel-icons'

export const DarligUU = () => {
  const [error, setError] = useState('')
  const [visFasit, setVisFasit] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const t = useAppContext().text.DarligUU
  document.title = t.title

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus()
    }
  }, [])

  return (
    <div className="flex flex-col gap-4 h-screen overflow-auto p-4 pl-6 golden-panel">
      <Heading
        level="3"
        size="medium"
        className="outline-none"
        tabIndex={-1}
        ref={headingRef}
      >
        {t.title}
      </Heading>

      <BodyShort>{t.info}</BodyShort>

      <div className="mt-6 flex flex-col gap-2">
        <Heading level="1" size="xsmall">
          {t.overskrift1}
        </Heading>
        <div className="flex space-x-4">
          <a href="#" className="no-underline text-[#4b3e2a]">
            {t.link1}
          </a>
          <a href="#" className="no-underline text-[#4b3e2a]">
            {t.link2}
          </a>
        </div>
        <p className="text-[#d7c7a3]">{t.kontrast}</p>

        <Heading level="5" size="xsmall" className="mt-2">
          {t.overskrift2}
        </Heading>
        <img src={img} className="h-8 w-8" />

        <Heading level="2" size="xsmall" className="mt-2">
          {t.overskrift3}
        </Heading>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setError(error ? '' : t.feilmelding)
          }}
          className="space-y-2"
        >
          <input
            type="text"
            placeholder={t.input}
            className="border p-2 w-[18rem]"
          />
          <Button className="p-2 gold-button ">Send</Button>
        </form>

        {error && (
          <Alert variant="error" size="small" className="mb-2">
            {error}
          </Alert>
        )}

        <div className="flex gap-4">
          <div
            onClick={() => alert(t.falskKnappAlert)}
            className="gold-button px-4 py-2"
          >
            {t.falskKnapp}
          </div>
          <Button
            className="gold-button px-4 py-2"
            icon={<RockingHorseIcon />}
            onClick={() => setVisFasit(!visFasit)}
          />
        </div>

        {visFasit && (
          <Alert variant="info" size="small" className="mt-2">
            <ul>
              {t.fasit.map((item, index) => (
                <li key={`fasit-${index}`}>{item}</li>
              ))}
            </ul>
          </Alert>
        )}
      </div>
    </div>
  )
}
