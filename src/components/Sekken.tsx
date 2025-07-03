import { useState } from 'react'
import { useAppContext } from '../AppContext'

export const Sekken = () => {
	const t = useAppContext().text.Sekken
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
			{open && <div className="flex gap-4 mt-1">{t.tomt}</div>}
		</div>
	)
}
