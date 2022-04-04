import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import Theme from './styles/theme'
import MainRoutes from './routes'
import packageJson from '../package.json'

global.appVersion = packageJson.version

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<MainRoutes />
		</ThemeProvider>
	)
}

export default App
