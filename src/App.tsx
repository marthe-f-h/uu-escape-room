import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { SprakVelger } from './components/SprakVelger'
import { basePath, startUrl, testUrl } from './constants'
import { SkjermleserKommandoer } from './components/SkjermleserKommandoer'
import { Velkomstside } from './spillet/Velkomstside'
import { Start } from './spillet/spillsider/1_Start'
import { TestSide } from './spillet/testsider/TestSide'
import { Sekken } from './components/Sekken'

export const App = () => {
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
			className="grid"
			style={{
				gridTemplateColumns: '20rem auto'
			}}
		>
			<aside className="meny flex flex-col gap-4">
				<SprakVelger />
				<SkjermleserKommandoer />
				<Sekken />
			</aside>
			<main>
				<Routes>
					<Route path={basePath} element={<Velkomstside />} />
					<Route path={testUrl} element={<TestSide />} />
					<Route path={startUrl} element={<Start />} />
				</Routes>
			</main>
		</div>
	)
}
