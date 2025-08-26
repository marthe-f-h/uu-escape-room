import { useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppContext } from '../../AppContext'
import { BodyLong, Heading, Link } from '@navikt/ds-react'
import imgLyre from '../bilder/lyre.png'
import { darligUUUrl } from '../../constants'

export const Slutten = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const { text, setSekkBeholdning } = useAppContext()
  const t = text.Slutten
  document.title = t.title

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus()
    }
    setSekkBeholdning([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="h-screen overflow-auto p-4 pl-6 golden-panel grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-4">
      <div>
        <Heading
          level="1"
          size="small"
          className="text-3xl mb-4 outline-none"
          tabIndex={-1}
          ref={headingRef}
        >
          {t.overskrift}
        </Heading>

        <BodyLong className="mb-4">{t.tekst[0]}</BodyLong>
        <BodyLong className="mb-4">{t.tekst[1]}</BodyLong>
        <BodyLong weight="semibold">{t.tekst[2]}</BodyLong>

        <BodyLong className="mt-8">{t.testMer}</BodyLong>
        <Link as={RouterLink} to={darligUUUrl} className="gold-button mt-2">
          {text.Velkomstside.darligUU}
        </Link>
      </div>
      <div className="flex justify-center mt-12">
        <img src={imgLyre} alt={t.lyren} className="h-[15rem]" />
      </div>
    </div>
  )
}
