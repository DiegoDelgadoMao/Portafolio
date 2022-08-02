import React, { useContext } from 'react';
import { theContext } from '../../context/theContext';
import { CHANGE_CONTENT_TYPES } from '../../actions/changeContentTypes';

import {
	RiCheckboxBlankCircleFill,
	RiFileList3Fill,
	RiContactsFill,
} from 'react-icons/ri';

import Logo from '../../assets/logoTeo2.png';

import '../../sass/base.scss';
import '../../sass/menu.scss';

const stylesBaseIcons = {
	fontSize: '1.8rem',
	color: '#eee',
};
const stylesBaseToggle = {
	fontSize: '1.8rem',
	color: '#eee',
};

export const Menu = () => {
	const { dispatch, darkMode, setDarkMode } = useContext(theContext);
	const handleClickArticles = () => {
		dispatch({ type: CHANGE_CONTENT_TYPES.ACTIVE_ARTICLES_PAGE });
	};
	const handleClickHomePage = () => {
		dispatch({ type: CHANGE_CONTENT_TYPES.ACTIVE_HOME_PAGE });
	};
	const handleClickAboutMe = () => {
		dispatch({ type: CHANGE_CONTENT_TYPES.ACTIVE_ABOUT_ME_PAGE });
	};
	const handleClickToggle = () => {
		setDarkMode(!darkMode);
		if (darkMode) {
			document.body.classList.remove('darkMode');
			document.body.classList.add('lightMode');
		} else {
			document.body.classList.remove('lightMode');
			document.body.classList.add('darkMode');
		}
	};
	return (
		<nav>
			<img onClick={handleClickHomePage} src={Logo} />
			<ul className='linksNav'>
				<li onClick={handleClickArticles} className='linksNav__link'>
					<RiFileList3Fill
						style={
							!darkMode
								? { ...stylesBaseIcons, color: '#2c292d' }
								: stylesBaseIcons
						}
					/>
					<p>Artículos</p>
				</li>
				<li onClick={handleClickAboutMe} className='linksNav__link'>
					<RiContactsFill
						style={
							!darkMode
								? { ...stylesBaseIcons, color: '#2c292d' }
								: stylesBaseIcons
						}
					/>
					<p>Sobre mi</p>
				</li>
				<li
					onClick={handleClickToggle}
					className={!darkMode ? 'linksNav__toggle--light' : 'linksNav__toggle'}
				>
					<RiCheckboxBlankCircleFill
						style={
							!darkMode
								? { ...stylesBaseToggle, color: '#2c292d' }
								: stylesBaseToggle
						}
					/>
				</li>
			</ul>
		</nav>
	);
};
