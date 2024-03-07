import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import '../../styles/Navbar.css'
import logo from '../../assets/nawy.svg'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegHeart } from 'react-icons/fa'

import {
	languageSelector,
	setLanguage,
} from '../../services/state/redux/app/appSlice'
import { Img } from 'react-image'
import Spinner from '../shared/Spinner'

const Navbar = () => {
	const { t, i18n } = useTranslation()
	const location = useLocation()
	const dispatch = useDispatch()
	const language = useSelector(languageSelector)

	const toggleLanguage = () => {
		const newLanguage = i18n.language === 'en' ? 'ar' : 'en'
		dispatch(setLanguage(newLanguage))
		i18n.changeLanguage(newLanguage)
	}

	return (
		<nav className='nav'>
			<NavLink to='/'>
				<Img
					className='logo'
					src={logo}
					alt='Nawy Logo'
					loader={<Spinner />}
				/>
			</NavLink>
			<ul>
				<li className={location.pathname === '/' ? 'active' : ''}>
					<NavLink to='/'>{t('nav_bar_home')}</NavLink>
				</li>
				<li className={location.pathname === '/search' ? 'active' : ''}>
					<NavLink to='/search'>{t('nav_bar_search')}</NavLink>
				</li>
				<li className={location.pathname === '/sell' ? 'active' : ''}>
					<NavLink to='/sell'>{t('nav_bar_sell')}</NavLink>
				</li>
				<li className={location.pathname === '/blog' ? 'active' : ''}>
					<NavLink to='/blog'>{t('nav_bar_blog')}</NavLink>
				</li>
				<li className={location.pathname === '/about' ? 'active' : ''}>
					<NavLink to='/about'>{t('nav_bar_about')}</NavLink>
				</li>
				<li
					className={location.pathname === '/contact' ? 'active' : ''}
				>
					<NavLink to='/contact'>{t('nav_bar_contact')}</NavLink>
				</li>
				<li
					className={location.pathname === '/nawyNow' ? 'active' : ''}
				>
					<NavLink to='/nawyNow'>{t('nav_bar_nawyNow')}</NavLink>
				</li>
				<li
					className={location.pathname === '/careers' ? 'active' : ''}
				>
					<NavLink to='/careers'>{t('nav_bar_careers')}</NavLink>
				</li>
			</ul>
			<div className='nav-lang-container'>
				<FaRegHeart size={25} />
				<button type='button' onClick={toggleLanguage}>
					{language === 'en' ? 'العربية' : 'English'}
				</button>
			</div>
		</nav>
	)
}

export default Navbar
