/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet'
import { PageEvent, TitleEventComplet } from './styles'
import LinksSocialMedia from '../../../../components/LinksSocialMedia'

function CultoJovemAbril2022() {
	return (
		<PageEvent>
			<Helmet>
				<title>Culto Jovem - 16 de Abril às 19h30</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Rubik+Glitch&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<div className="bg-overlay" />
			<div className="container">
				<div className="data">
					16 de Abril <span>| Sábado |</span> às 19h30
				</div>
				<div className="main">
					<div className="info">
						<h1>Culto Jovem</h1>
						<div className="container-letters">
							<TitleEventComplet>
								<span className="down">Perder</span> para <span className="up">Ganhar</span>
							</TitleEventComplet>
						</div>
						<p className="verso">Você tem gastado sua vida em favor de quem?</p>
						<a
							href="https://www.bibliaonline.com.br/acf/mt/16/25,26"
							className="ref"
							target="_blank"
							rel="noreferrer"
						>
							Mateus 16:25-26
						</a>
					</div>
				</div>
				<div className="footer">
					<LinksSocialMedia />
					<div className="local">
						Av. Presidente Castelo Branco s/n LT 13 QD 112 - Parque Tietê - São João de Meriti - RJ
					</div>
				</div>
			</div>
		</PageEvent>
	)
}

export default CultoJovemAbril2022
