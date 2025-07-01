import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useAppContext } from './AppContext'
import {
  basePath,
  startUrl,
  testUrl
} from './constants'
import { SkjermleserKommandoer } from './spillet/SkjermleserKommandoer'
import { Velkomstside } from './spillet/Velkomstside'
import { TestSide } from './spillet/testsider/TestSide'
import { Start } from './spillet/spillsider/1_Start'

export const App = () => {
	const { selectedLanguage } = useAppContext()
	const navigate = useNavigate()

	useEffect(() => {
		const redirectPath = sessionStorage.getItem('redirectPath')
		if (redirectPath) {
			sessionStorage.removeItem('redirectPath')
			navigate(redirectPath, { replace: true })
		}
	}, [navigate])

	return (
		<div
			className={`grid ${
				selectedLanguage === 'norsk' ? 'bg-[#004367]' : 'bg-[#666E00]'
			} `}
			style={{
				gridTemplateColumns: '18rem auto'
			}}
		>
			<aside>
				 <SkjermleserKommandoer />
			</aside>
			<main>
				<Routes>
					<Route
						path={basePath}
						element={ <Velkomstside /> }
					/>
					<Route
						path={testUrl}
						element={<TestSide />}
					/>
					<Route
						path={startUrl}
						element={ <Start /> }
					/>
				</Routes>
			</main>
		</div>
	)
}
