import { Heading } from '@navikt/ds-react'
import { useEffect, useRef } from 'react'

interface Props {
	title: string
	overskrift: string
	children: [React.ReactNode, React.ReactNode]
}

export const OppgaveWrapper = ({ title, overskrift, children }: Props) => {
	document.title = title
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="h-screen overflow-auto p-4 pl-6 golden-panel grid grid-cols-[60%_1px_1fr] gap-4">
			<div>
				<Heading
					level="1"
					size="small"
					className="text-3xl mb-4 outline-none"
					tabIndex={-1}
					ref={headingRef}
				>
					{overskrift}
				</Heading>
				{children[0]}
			</div>

			<div className="bg-[#4b3e2a]" />

			{children[1]}
		</div>
	)
}
