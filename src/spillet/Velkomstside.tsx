import { BodyLong, Heading, Link } from '@navikt/ds-react'
import { useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppContext } from '../AppContext'
import { startUrl, testUrl } from '../constants'

export const Velkomstside = () => {
	const headingRef = useRef<HTMLHeadingElement>(null)
	const t = useAppContext().text.Velkomstside

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="golden-panel">
			<Heading
				level="1"
				size="medium"
				className="mb-4 outline-none"
				tabIndex={-1}
				ref={headingRef}
			>
				{t.velkommen}
			</Heading>

			<BodyLong className="mb-6 max-w-[75ch]">{t.beskrivelse}</BodyLong>
			<Link as={RouterLink} to={testUrl} className="gold-button mr-6">
				{t.test}
			</Link>
			<Link as={RouterLink} to={startUrl} className="gold-button">
				{t.startLink}
			</Link>
		</div>
	)
}
