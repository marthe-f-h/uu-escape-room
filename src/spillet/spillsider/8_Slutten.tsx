import { useEffect, useRef } from 'react'
import { useAppContext } from '../../AppContext'
import { BodyLong, Heading } from '@navikt/ds-react'

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
		<div className="h-screen overflow-auto p-4 pl-6 golden-panel">
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
			<BodyLong>{t.tekst[2]}</BodyLong>
		</div>
	)
}
