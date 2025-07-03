type Props = {
	text: string
	onClick?: () => void
}
export const GoldButton = ({ text, onClick }: Props) => {
	return (
		<button className="gold-button" onClick={onClick}>
			{text}
		</button>
	)
}

interface ScoopedButtonProps {
	text: string
	onClick?: () => void
}
const ScoopedButton: React.FC<ScoopedButtonProps> = ({ text, onClick }) => {
	return (
		<button className="button-1" onClick={onClick}>
			{text}
		</button>
	)
}
export default ScoopedButton