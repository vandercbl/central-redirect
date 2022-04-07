import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<>
			<h1>Home</h1>
			<Link to="/centro-de-divulgacao">Centro de Divulgação</Link>
			{/* <Link to="/events/2022/culto-jovem-abril">Evento</Link> */}
		</>
	)
}

export default Home
