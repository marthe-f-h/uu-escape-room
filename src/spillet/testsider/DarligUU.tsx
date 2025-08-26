import {
  BodyShort,
  Heading
} from '@navikt/ds-react'
import { useEffect, useRef } from 'react'
import { useAppContext } from '../../AppContext'

export const DarligUU = () => {
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
        level="1"
        size="medium"
        className="outline-none"
        tabIndex={-1}
        ref={headingRef}
      >
        {t.title}
      </Heading>

      <BodyShort>{t.info}</BodyShort>

    </div>
  )
}
