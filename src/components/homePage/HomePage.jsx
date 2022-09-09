import React, { useContext } from 'react';
import { RiArrowRightFill, RiFileUserFill } from 'react-icons/ri';

import { FooterHomePage } from '../FooterHomePage/FooterHomePage';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

import { theContext } from '../../context/theContext';
import { CHANGE_CONTENT_TYPES } from '../../actions/changeContentTypes';

const styleBaseIcon = {
	fontSize: '2.5rem',
};

export const HomePage = () => {
	const { state, dispatch } = useContext(theContext);
	const handleClick = () => {
		dispatch({ type: CHANGE_CONTENT_TYPES.ACTIVE_ABOUT_ME_PAGE });
	};
	return (
		<div className={state.homePage ? 'HomePage' : 'hidden'}>
			<main>
				<h1>
					Soy Diego Mauricio Delgado Espinosa, frontend developer apasionado por
					la tecnología y la programación
				</h1>
				<div className='HomePage__btns'>
					<button onClick={handleClick} className='homePageBtn'>
						<p>Conoce más</p>
						<RiArrowRightFill style={styleBaseIcon} />
					</button>
					<a
						href='https://drive.google.com/file/d/1x43ym4EE7xJOCXz0Q99-ETVX0ofx_NUq/view?usp=sharing'
						target='_blank'
						className='homePageBtn homePageBtn--CV'
					>
						<p>Ver CV</p>
						<RiFileUserFill style={styleBaseIcon} />
					</a>
				</div>

				<SocialNetworks />
			</main>
			<FooterHomePage />
		</div>
	);
};
