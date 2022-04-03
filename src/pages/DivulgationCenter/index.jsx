import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DivulgationCenter() {
	const navigate = useNavigate()
	const urlRedirect = 'https://www.instagram.com/juventudemens/'

	const redirectPage = (url) => {
		// eslint-disable-next-line prefer-regex-literals
		const regexp = new RegExp(/^http/i)
		const hasHttp = regexp.test(url)
		if (hasHttp) {
			window.location = url
		} else {
			navigate(url)
		}
	}

	useEffect(() => {
		setTimeout(() => {
			redirectPage(urlRedirect)
		}, 5000)
	}, [])

	return (
		<>
			<h1>Central de divulgação</h1>
			<p>Vai ser a página que vai redirecionar para as outras</p>
		</>
	)
}

export default DivulgationCenter
