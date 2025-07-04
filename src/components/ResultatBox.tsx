import { BodyShort, Link } from '@navikt/ds-react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppContext } from '../AppContext'

interface Props {
	harRiktigKode?: boolean
	gave: string
	nesteUrl: string
}

export const ResultatBox = ({ harRiktigKode, gave, nesteUrl }: Props) => {
	const { text } = useAppContext()

	return (
		<div>
			{harRiktigKode && (
				<div className="mt-4" role="alert" aria-atomic="true">
					<BodyShort>{text.kode.rett}</BodyShort>
					<BodyShort className="mt-2">{gave}</BodyShort>
					<Link
						as={RouterLink}
						to={nesteUrl}
						className="gold-button mt-4"
					>
						{text.kode.videre}
					</Link>
				</div>
			)}
			{harRiktigKode === false && (
				<div className="mt-4" role="alert" aria-atomic="true">
					{text.kode.feil}
				</div>
			)}
		</div>
	)
}
