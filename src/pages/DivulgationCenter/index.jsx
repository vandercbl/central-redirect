import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DivulgationCenter() {
	const navigate = useNavigate()
	const urlRedirect = 'https://www.instagram.com/juventudemens/'
	// const urlRedirect = '/events/2022/culto-jovem-abril'

	const redirectPage = (url) => {
		// eslint-disable-next-line prefer-regex-literals
		const regexp = new RegExp(/^http/i)
		const hasHttp = regexp.test(url)
		if (hasHttp) {
			setTimeout(() => {
				window.location = url
			}, 1000)
		} else {
			navigate(url)
		}
	}

	const [desatualizado, setDesatualizado] = useState(false)

	useEffect(() => {
		fetch(`/meta.json?${new Date().getTime()}`, { cache: 'no-cache' })
			// headers: {
			// 	'Content-Type': 'application/json',
			// 	Accept: 'application/json',
			// },
			// })
			.then((response) => response.json())
			.then(async (meta) => {
				const latestVersion = meta.version
				const currentVersion = global.appVersion
				console.log('latestVersion', latestVersion)
				console.log('currentVersion', currentVersion)
				if (latestVersion !== currentVersion) {
					console.log('nova versão')
					setDesatualizado(true)
					if (caches) {
						const names = await caches.keys()
						console.log(names)
						await Promise.all(names.map((name) => caches.delete(name)))
					}
					window.location.reload()
				} else {
					console.log('versão velha')
					setDesatualizado(false)
					redirectPage(urlRedirect)
				}
			})
	}, [])

	return (
		<>
			{desatualizado ? <p>Desatualizado</p> : <p>Carregando...</p>}
			<p>...</p>
		</>
	)
}

export default DivulgationCenter
