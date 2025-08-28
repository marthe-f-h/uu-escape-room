import { Heading, Link } from '@navikt/ds-react'
import { useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppContext } from '../../AppContext'
import { venusUrl } from '../../constants'

export const Start = () => {
	const t = useAppContext().text.Start

	document.title = t.title
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
    <div className="h-screen overflow-auto p-4 pl-6 golden-panel">
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
        {t.intro.map((text, index) => (
          <p key={`text-${index}`} className="mb-4">
            {text}
          </p>
        ))}
        <p className="mt-2">{t.mal}</p>
      </div>
      <Link as={RouterLink} to={venusUrl} className="gold-button mt-8">
        {t.begynn}
      </Link>
    </div>
  )
}
