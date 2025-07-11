import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Sekken } from './components/Sekken'
import { SkjermleserKommandoer } from './components/SkjermleserKommandoer'
import { SprakVelger } from './components/SprakVelger'
import {
	basePath,
	jupiterUrl,
	marsUrl,
	merkurUrl,
	minervaUrl,
	neptunUrl,
	plutoUrl,
	startUrl,
	testUrl,
	venusUrl
} from './constants'
import { Velkomstside } from './spillet/Velkomstside'
import { Start } from './spillet/spillsider/0_Start'
import { Venus } from './spillet/spillsider/1_Venus'
import { TestSide } from './spillet/testsider/TestSide'
import { Mars } from './spillet/spillsider/2_Mars'
import { Minerva } from './spillet/spillsider/3_Minerva'
import { Neptun } from './spillet/spillsider/4_Neptun'
import { Merkur } from './spillet/spillsider/5_Merkur'
import { Pluto } from './spillet/spillsider/6_Pluto'
import { Jupiter } from './spillet/spillsider/7_Jupiter'

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
			<aside className="blue_box meny flex flex-col gap-4">
				<SprakVelger />
				<SkjermleserKommandoer />
				<Sekken />
			</aside>
			<main>
				<Routes>
					<Route path={basePath} element={<Velkomstside />} />
					<Route path={testUrl} element={<TestSide />} />
					<Route path={startUrl} element={<Start />} />
					<Route path={venusUrl} element={<Venus />} />
					<Route path={marsUrl} element={<Mars />} />
					<Route path={minervaUrl} element={<Minerva />} />
					<Route path={neptunUrl} element={<Neptun />} />
					<Route path={merkurUrl} element={<Merkur />} />
					<Route path={plutoUrl} element={<Pluto />} />
					<Route path={jupiterUrl} element={<Jupiter />} />
				</Routes>
			</main>
		</div>
	)
}
