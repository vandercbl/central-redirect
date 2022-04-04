import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DivulgationCenter() {
	const navigate = useNavigate()
	// const urlRedirect = 'https://www.instagram.com/juventudemens/'
	const urlRedirect = 'https://www.google.com'

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

	return <p>Carregando...</p>
}

export default DivulgationCenter
