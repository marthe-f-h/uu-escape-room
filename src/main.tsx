import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { AppContextProvider } from './AppContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppContextProvider initialSelectedLanguage="norsk">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppContextProvider>
	</StrictMode>
)
