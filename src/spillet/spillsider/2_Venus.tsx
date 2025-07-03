import { BodyLong, BodyShort, Heading, Link, TextField } from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppContext } from '../../AppContext'
import { marsUrl } from '../../constants'
import { SekkBeholdingTyper } from '../sekken'

export const Venus = () => {
	const { text, setSekkBeholdning } = useAppContext()
	const t = text.Venus

	const [kode, setKode] = useState('')
	const [harRiktigKode, setHarRiktigKode] = useState<boolean>()

	const brukKode = (testKode: string) => {
		const harRiktigKode =
			testKode.trim().toLocaleLowerCase() === 'lyset' ||
			testKode.trim() === 'fbsat'
		if (harRiktigKode) {
			setSekkBeholdning([SekkBeholdingTyper.Krukke])
		}
		setHarRiktigKode(harRiktigKode)
	}

	document.title = t.title
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="h-screen overflow-auto p-4 pl-6 golden-panel grid grid-cols-[60%_1px_1fr] gap-4">
			<div>
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
				</div>
				<BodyLong className="whitespace-pre-wrap mb-4">
					{t.oppgave.join('\r\n')}
				</BodyLong>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						brukKode(kode)
					}}
				>
					<TextField
						label={t.oppgaveLabel}
						size="small"
						className="w-[20rem]"
						value={kode}
						onChange={(e) => setKode(e.target.value)}
					/>
					<button className="mt-4 gold-button">
						{text.kode.provKoden}
					</button>
				</form>
			</div>

			<div className="bg-[#4b3e2a]" />

			<div>
				{harRiktigKode && (
					<div className="mt-4" role="alert">
						<BodyShort>{text.kode.rett}</BodyShort>
						<BodyShort className="mt-2">
							{t.gave}
						</BodyShort>
						<Link
							as={RouterLink}
							to={marsUrl}
							className="gold-button mt-4"
						>
							{text.kode.videre}
						</Link>
					</div>
				)}
				{harRiktigKode === false && (
					<div className="mt-4" role="alert">
						{text.kode.feil}
					</div>
				)}
			</div>
		</div>
	)
}
