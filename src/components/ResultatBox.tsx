import { BodyShort, Link } from '@navikt/ds-react'
import type { Texts } from "../texts"
import { Link as RouterLink } from 'react-router-dom'

interface Props {
	harRiktigKode?: boolean
	text: Texts
  gave: string
  nesteUrl: string
}

export const ResultatBox = ({ harRiktigKode, text, gave, nesteUrl }: Props) => {
	return (
		<div>
			{harRiktigKode && (
				<div className="mt-4" role="alert">
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
				<div className="mt-4" role="alert">
					{text.kode.feil}
				</div>
			)}
		</div>
	)
}