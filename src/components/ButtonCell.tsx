
export const ButtonCell = <T extends string>({
	value,
	label,
	color,
	hideValue,
	onClick
}: {
	value: T
	label: string
	color?: string
	hideValue?: boolean
	onClick: (value: T) => void
}) => (
	<button
		aria-label={label}
		className={`cursor-pointer ${
			color || 'bg-[#4b3e2a]'
		} w-[4rem] aspect-square p-4 flex items-center justify-center`}
		onClick={(e) => {
			e.preventDefault()
			onClick(value)
		}}
	>
		{hideValue ? '' : value}
	</button>
)
