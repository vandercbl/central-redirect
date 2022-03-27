import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DivulgationCenter() {
	const navigate = useNavigate()
	const urlRedirect = 'https://www.google.com.br'

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
		redirectPage(urlRedirect)
	}, [])

	return (
		<>
			<h1>Central de divulgação</h1>
			<p>Vai ser a página que vai redirecionar para as outras</p>
		</>
	)
}

export default DivulgationCenter
