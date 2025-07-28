import { useState } from 'react'
import { useAppContext } from '../AppContext'
import { SekkBeholdingTyper, type SekkBeholdingType } from '../spillet/utils'
import imgKrukke from '../spillet/bilder/krukke.png'
import imgSverd from '../spillet/bilder/sverd.png'
import imgPergament from '../spillet/bilder/pergament.png'
import imgHjelm from '../spillet/bilder/hjelm.png'

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
				onClick={() => {
					setOpen(!open)
				}}
			>
				{t.overskrift}
			</button>
			{open && (
				<div className="flex flex-wrap items-center gap-4 p-4 border-l border-b border-r border-[#d8a33c] rounded-b-md">
					{sekkBeholdning.length > 0
						? sekkBeholdning.map((item, index) => (
								<div key={index} className="sekk-item">
									<img
										src={getBilde(item)}
										alt={t[item]}
										className="h-16"
									/>
								</div>
						  ))
						: t.tomt}
				</div>
			)}
		</div>
	)
}
