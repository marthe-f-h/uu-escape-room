import { BodyShort, Heading } from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'

interface Props {
	title: string
	overskrift: string
	children: [React.ReactNode, React.ReactNode]
	hints?: string[]
}

export const OppgaveWrapper = ({
	title,
	overskrift,
	children,
	hints
}: Props) => {
	document.title = title
	const headingRef = useRef<HTMLHeadingElement>(null)
	const [hint, settHint] = useState<string>()

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	useEffect(() => {
		if (!hints || hints.length === 0) {
			return
		}
		setTimeout(() => {
			if (hints.length > 0) {
				settHint(hints[0])
			}
		}, 4 * 60 * 1000)

		if (hints.length > 1) {
			setTimeout(() => {
				settHint(hints[1])
			}, 8 * 60 * 1000)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

			<div className="flex flex-col justify-between">
				{children[1]}
				{hint && (
					<div role="alert" aria-atomic="true">
						<Heading
							level="2"
							size="xsmall"
							className="text-2xl mb-2"
						>
							Hint
						</Heading>
						<BodyShort className="blur">{hint}</BodyShort>
					</div>
				)}
			</div>
		</div>
	)
}
