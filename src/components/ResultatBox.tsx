import { BodyShort, Link } from '@navikt/ds-react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppContext } from '../AppContext'

interface Props {
  harRiktigKode?: boolean
  gave: string
  nesteUrl: string
  feilmelding?: string
  fryst?: boolean
}

export const ResultatBox = ({
  harRiktigKode,
  gave,
  nesteUrl,
  feilmelding,
  fryst
}: Props) => {
  const { text } = useAppContext()

  return (
    <div>
      {harRiktigKode && (
        <>
          <div className="mt-4" role="alert">
            <BodyShort>{text.kode.rett}</BodyShort>
            <BodyShort className="mt-2">{gave}</BodyShort>
          </div>
          <Link as={RouterLink} to={nesteUrl} className="gold-button mt-4">
            {text.kode.videre}
          </Link>
        </>
      )}
      {harRiktigKode === false && (
        <div className="mt-4" role="alert">
          {feilmelding || text.kode.feil}
        </div>
      )}

      {fryst === false && (
        <div role="alert" className="sr-only">
          {text.kode.timeoutFerdig}
        </div>
      )}
    </div>
  )
}
