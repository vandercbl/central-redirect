import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import Theme from './styles/theme'
import MainRoutes from './routes'

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<MainRoutes />
		</ThemeProvider>
	)
}

export default App
