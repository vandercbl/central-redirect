import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import DivulgationCenter from '../pages/DivulgationCenter'

export default function MainRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/centro-de-divulgacao" element={<DivulgationCenter />} />
			</Routes>
		</BrowserRouter>
	)
}
