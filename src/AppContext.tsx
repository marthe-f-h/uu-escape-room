import { createContext, useContext, useState } from 'react'
import type { Language, Texts } from './texts'
import getTexts from './texts'
import type { SekkBeholdingType } from './spillet/sekken'

export interface AppContextProps {
	text: Texts
	selectedLanguage: Language
	sekkBeholdning: SekkBeholdingType[]
	setSelectedLanguge: React.Dispatch<React.SetStateAction<Language>>
	setSekkBeholdning: React.Dispatch<React.SetStateAction<SekkBeholdingType[]>>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

const useAppContext = () => {
	const context = useContext(AppContext)

	if (!context) {
		throw new Error(
			'useAppContext must be used within an AppContextProvider'
		)
	}

	return context
}

const AppContextProvider = ({
	initialSelectedLanguage,
	children
}: {
	initialSelectedLanguage: Language
	children: React.ReactNode
}) => {
	const [selectedLanguage, setSelectedLanguge] = useState(
		initialSelectedLanguage
	)
	const [sekkBeholdning, setSekkBeholdning] = useState<SekkBeholdingType[]>(
		[]
	)

	const contextValue: AppContextProps = {
		selectedLanguage,
		text:
			selectedLanguage === 'norsk'
				? getTexts('norsk')
				: getTexts('engelsk'),
		sekkBeholdning,
		setSelectedLanguge,
		setSekkBeholdning
	}

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppContextProvider, useAppContext }
