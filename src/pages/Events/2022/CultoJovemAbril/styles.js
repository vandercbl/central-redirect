import styled, { keyframes } from 'styled-components'
import imgBg from '../../../../assets/images/culto-opcao-4.jpg'

const increaseWidth = keyframes`
	0% { background-position: 200% 100%; }
	50% { background-position: 100% 100%; }
	100% { background-position: 0% 100%; }
`

const zoom = keyframes`
	from {
		background-size: 400%;
	}
	to {
		background-size: 150%;
	}
`

const appearTop = keyframes`
	from {
		transform: translateY(-80px);
	}
	to {
		transform: translateY(0px);
	}
`

export const PageEvent = styled.div`
	height: 100vh;
	background: url(${imgBg});
	background-size: cover;
	/* background-size: 100%; */
	background-position: center;
	animation: ${zoom} 14s;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;

		@media (min-width: 768px) {
			display: block;
			height: auto;
		}
	}

	.bg-overlay {
		background: linear-gradient(-45deg, #1f366a, #9d4612, #802352, #000);
		background-size: 400% 400%;
		animation: gradient 4s ease infinite;

		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0.4;
		z-index: 0;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.data {
		transform: translateY(-80px);
		position: static;
		font-size: 1.5rem;
		text-align: center;
		top: 0;
		right: 0;
		color: #ffffff;
		z-index: 2;
		text-transform: uppercase;
		font-family: 'Fjalla One', sans-serif;
		opacity: 0.9;
		padding-top: 20px;
		animation-name: ${appearTop};
		animation-delay: 1s;
		animation-duration: 3s;
		animation-fill-mode: forwards;
		/* animation: ${appearTop} 3s 1s; */

		span {
			color: #e64f0a;
			position: relative;

			&:before {
				content: '';
				display: block;
				width: 140%;
				height: 10px;
				background: #e64f0a;
				position: absolute;
				z-index: 2;
				left: -20%;
				top: -20px;
			}
		}

		@media (min-width: 768px) {
			font-size: 2rem;
			padding-top: 20px;
		}
	}

	.main {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: auto;

		@media (min-width: 768px) {
			height: 70vh;
		}

		.info {
			h1 {
				font-size: 2.5rem;
				font-family: 'Rubik Glitch', cursive;
				font-weight: 200;
				color: #000;
				text-shadow: 1px 1px 2px #ffffffc4;
				margin-top: 20px;

				@media (min-width: 768px) {
					font-size: 5rem;
					margin-top: 0px;
				}
			}
			h2 {
				font-size: 4rem;
			}

			.verso {
				display: none;

				@media (min-width: 768px) {
					display: block;
				}
			}

			@media (min-width: 768px) {
				display: block;
			}

			.ref {
				color: #000000c4;
				background: #e64f0aa4;
				display: block;
				width: fit-content;
				padding: 8px;
				border-radius: 10px;
				margin: 6px 0;
				font-weight: bold;
			}
			p {
				color: #ffffff;
				margin: 5px 0;
			}
		}
	}

	.container-letters {
		display: inline-block;
	}

	.footer {
		padding: 16px 0;
		.local {
			text-align: center;
			color: #ffffffc4;
		}
	}
`
export const TitleEventComplet = styled.div`
	font-family: 'Fjalla One', sans-serif;
	font-size: 3.5rem;
	color: #ffffffc4;
	margin: 2vh 0;

	@media (min-width: 768px) {
		font-size: 5rem;
	}

	span {
		position: relative;
		&:after {
			content: '';
			display: inline-block;
			height: 2px;
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 10px;
		}
	}

	.up:after {
		/* background: linear-gradient(-90deg, #535889, #71a2df 20%, #71a2df 50%, #71a2df 80%, #535889); */
		background: linear-gradient(-90deg, #380643, #7d3e8a 20%, #7d3e8a 50%, #7d3e8a 80%, #380643);
		background-size: 200% 200%;
		animation: ${increaseWidth} 4s infinite;
	}
	.down:after {
		/* background: linear-gradient(-90deg, #6a3838, #df7171 20%, #df7171 50%, #df7171 80%, #6a3838); */
		background: linear-gradient(-90deg, #8b2d02, #e64f0a 20%, #e64f0a 50%, #e64f0a 80%, #8b2d02);
		background-size: 200% 200%;
		animation: ${increaseWidth} 6s infinite;
	}
`
