/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { FaInstagram, FaYoutube, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa'
import { FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa'
import { SocialContainer } from './styles'

function LinkSocialMedia() {
	return (
		<SocialContainer>
			<ul className="social-icons">
				<li>
					<a
						href="https://www.instagram.com/juventudemens/?utm_medium=copy_link"
						title="Instagram"
						target="_blank"
						rel="noreferrer"
					>
						<FaInstagram className="i" />
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/c/menovoser"
						title="Youtube"
						target="_blank"
						rel="noreferrer"
					>
						<FaYoutube className="i" />
					</a>
				</li>
				{/* <li>
					<a href="#" title="Facebook">
						<FaFacebookF className="i" />
					</a>
				</li> */}
				<li>
					<a
						href="https://www.google.com/maps/dir//-22.790254,-43.3304281/@-22.790246,-43.3306668,133m/data=!3m1!1e3!4m2!4m1!3e0"
						title="Como Chegar"
						target="_blank"
						rel="noreferrer"
					>
						<FaMapMarkerAlt className="i" />
					</a>
				</li>
			</ul>
		</SocialContainer>
	)
}

export default LinkSocialMedia
