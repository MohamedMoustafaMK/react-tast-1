import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/Footer.css' 

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className='footer-container'>
			<div className='footer-section'>
				<h5>{t('footer-areas')}</h5>
				<ul>
					<li>{t('footer-area-New_Cairo')}</li>
					<li>{t('footer-area-New_Capital_City')}</li>
					<li>{t('footer-area-6th_of_October_City')}</li>
					<li>{t('footer-area-North_Coast')}</li>
					<li>{t('footer-area-Ras_El_Hekma')}</li>
					<li>{t('footer-area-Ain_Sokhna')}</li>
					<li>{t('footer-area-El_Sheikh_Zayed')}</li>
					<li>{t('footer-area-Mostakbal_City')}</li>
					<li>{t('footer-area-New_Heliopolis')}</li>
					<li>{t('footer-area-El_Shorouk')}</li>
				</ul>
			</div>

			<div className='footer-section'>
				<h5>{t('footer-recommended')}</h5>
				<ul>
					<li>{t('footer-recommended-Meadows_Park')}</li>
					<li>{t('footer-recommended-Dyar')}</li>
					<li>{t('footer-recommended-Axis_X_Iwan')}</li>
					<li>{t('footer-recommended-The_Loft')}</li>
					<li>{t('footer-recommended-Badya')}</li>
					<li>
						{t('footer-recommended-Marriott_Residences_Heliopolis')}
					</li>
					<li>
						{t('footer-recommended-Mountain_View_iCity_October')}
					</li>
					<li>{t('footer-recommended-The_Loft_Plaza')}</li>
					<li>{t('footer-recommended-Il_Latini_City_Edge')}</li>
					<li>{t('footer-recommended-Al_Maqsad_Park')}</li>
				</ul>
			</div>

			<div className='footer-section'>
				<h5>{t('footer-latest-developers')}</h5>
				<ul>
					<li>{t('footer-developer-ARCO')}</li>
					<li>{t('footer-developer-IWAN_Developments')}</li>
					<li>{t('footer-developer-Living_Yards_Developments')}</li>
					<li>{t('footer-developer-Palm_Hills_Developments')}</li>
					<li>{t('footer-developer-A_Capital_Holding')}</li>
					<li>{t('footer-developer-Mountain_View')}</li>
					<li>{t('footer-developer-City_Edge_Developments')}</li>
					<li>{t('footer-developer-Jdar_Development')}</li>
					<li>{t('footer-developer-AMG_Ava_Mina_Group')}</li>
					<li>{t('footer-developer-Tabarak_Developments')}</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
