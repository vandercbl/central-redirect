import styled, { css } from 'styled-components'

const config = {
	timing: '365ms',
	iconColor: '#6039ad',
	accent: '#e64f0a',
}

const transformScale = (size = 1) => {
	return css`
		transform: scale(${size});
		-ms-transform: scale(${size});
		-webkit-transform: scale(${size});
	`
}

export const SocialContainer = styled.section`
	margin: 0 auto;
	text-align: center;

	.social-icons {
		padding: 0;
		list-style: none;
		margin: 1em;

		li {
			display: inline-block;
			margin: 0 1rem;
			position: relative;
			font-size: 1.2em;
			text-align: center;
		}

		.i {
			color: #ffffffc4;
			position: absolute;
			top: 21px;
			left: 21px;
			transition: all ${config.timing} ease-out;
		}

		a {
			display: inline-block;
			position: relative;

			&:before {
				${transformScale}
				content: ' ';
				width: 60px;
				height: 60px;
				border-radius: 100%;
				display: block;
				background: linear-gradient(45deg, ${config.iconColor}, ${config.accent});
				transition: all ${config.timing} ease-out;
			}

			&:hover:before {
				transform: scale(0);
				transition: all ${config.timing} ease-in;
			}

			&:hover {
				.i {
					${transformScale(2.2)}
					color: #ffffffc4;
					background: -webkit-linear-gradient(45deg, ${config.iconColor}, ${config.accent});
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					transition: all ${config.timing} ease-in;
				}
			}
		}
	}
`

export default SocialContainer
