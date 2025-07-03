import { Radio, RadioGroup, Stack } from '@navikt/ds-react'
import { useAppContext } from '../AppContext'

export const SprakVelger = () => {
	const { selectedLanguage, setSelectedLanguge } = useAppContext()

	return (
		<RadioGroup
			className="border-b border-[#d4a53a] pb-2"
			legend={
				selectedLanguage == 'engelsk' ? 'Select language' : 'Velg språk'
			}
			size="small"
			onChange={(v) => {
				setSelectedLanguge(v === 'engelsk' ? 'engelsk' : 'norsk')
				document.documentElement.lang = v === 'engelsk' ? 'en' : 'no'
			}}
			value={selectedLanguage}
		>
			<Stack
				gap="0 6"
				direction={{ xs: 'column', sm: 'row' }}
				wrap={false}
			>
				<Radio value="norsk">Norsk</Radio>
				<Radio value="engelsk">Engelsk</Radio>
			</Stack>
		</RadioGroup>
	)
}
