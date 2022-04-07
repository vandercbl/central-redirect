/* eslint-disable no-unused-vars */
import React from 'react'
import { PageEvent, TitleEventComplet } from './styles'
import LinksSocialMedia from '../../../../components/LinksSocialMedia'

function CultoJovemAbril2022() {
	return (
		<PageEvent>
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
						<p className="verso">
							Porque aquele que quiser salvar a sua vida, perdê-la-á, e quem perder a sua vida por
							amor de mim, achá-la-á.
						</p>
						<p className="verso">
							Pois que aproveita ao homem ganhar o mundo inteiro, se perder a sua alma? Ou que dará
							o homem em recompensa da sua alma?
						</p>
						<p className="ref">Mateus 16:25-26</p>
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
