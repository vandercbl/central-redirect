import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<>
			<h1>Home</h1>
			<p>Texto home a</p>
			<Link to="/centro-de-divulgacao">Centro</Link>
			<Link to="/events/2022/culto-jovem-abril">Evento</Link>
		</>
	)
}

export default Home
