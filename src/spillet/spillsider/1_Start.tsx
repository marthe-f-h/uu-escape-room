import { Heading } from '@navikt/ds-react'
import { useEffect, useRef } from 'react'
import { useAppContext } from '../../AppContext'

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
		<div className="bg-white h-screen overflow-auto p-4 pl-6 text-black">
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
					<p key={index} className="mb-4">
						{text}
					</p>
				))}
				<p className="mt-2">
					{t.mal}
				</p>
			</div>
		</div>
	)
}
