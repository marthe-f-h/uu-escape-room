import { useState } from 'react'
import { useAppContext } from '../AppContext'
import { SekkBeholdingTyper, type SekkBeholdingType } from '../spillet/utils'
import imgKrukke from '../spillet/bilder/krukke.png'
import imgSverd from '../spillet/bilder/sverd.png'
import imgPergament from '../spillet/bilder/pergament.png'
import imgHjelm from '../spillet/bilder/hjelm.png'
import imgPose from '../spillet/bilder/pose.png'
import imgStein from '../spillet/bilder/stein.png'

const getBilde = (sekkeType: SekkBeholdingType) => {
	switch (sekkeType) {
		case SekkBeholdingTyper.Krukke:
			return imgKrukke
		case SekkBeholdingTyper.Sverd:
			return imgSverd
		case SekkBeholdingTyper.Pergament:
			return imgPergament
		case SekkBeholdingTyper.Hjelm:
			return imgHjelm
		case SekkBeholdingTyper.Mynter:
			return imgPose
		case SekkBeholdingTyper.Stein:
			return imgStein
	}
}

export const Sekken = () => {
	const { text, sekkBeholdning } = useAppContext()
	const t = text.Sekken
	const [open, setOpen] = useState(false)

	return (
    <div className="">
      <button
        className="meny-knapp"
        aria-controls="sekk-panel"
        aria-expanded={open}
        data-state={open ? 'open' : 'closed'}
        onClick={() => {
          setOpen(!open)
        }}
      >
        {t.overskrift}
      </button>
      <div id="sekk-panel" aria-label={t.overskrift} role="region">
        {open && (
          <div className="flex flex-wrap items-center gap-4 p-4 border-l border-b border-r border-[#d8a33c] rounded-b-md">
            {sekkBeholdning.length > 0
              ? sekkBeholdning.map((item, index) => (
                  <div key={`sekk-item-${index}`} className="sekk-item">
                    <img src={getBilde(item)} alt={t[item]} className="h-16" />
                  </div>
                ))
              : t.tomt}
          </div>
        )}
      </div>
    </div>
  )
}
