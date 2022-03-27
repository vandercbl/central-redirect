import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import DivulgationCenter from '../pages/DivulgationCenter'
import Page404 from '../pages/Page404'

// PÁGINAS DE EVENTOS
import CultoJovemAbril2022 from '../pages/Events/2022/CultoJovemAbril'

export default function MainRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/centro-de-divulgacao" element={<DivulgationCenter />} />

				{/* PÁGINAS DE EVENTOS */}
				<Route path="/events/2022/culto-jovem-abril" element={<CultoJovemAbril2022 />} />

				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	)
}
