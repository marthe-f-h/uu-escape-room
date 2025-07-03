import { useState } from 'react'
import { useAppContext } from '../AppContext'

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
				<div className="flex flex-col items-center gap-4 p-4 border-l border-b border-r border-[#d8a33c] rounded-b-md">
					{sekkBeholdning.length > 0
						? sekkBeholdning.map((item, index) => (
								<div key={index} className="sekk-item">
									{t[item]}
								</div>
						  ))
						: t.tomt}
				</div>
			)}
		</div>
	)
}
