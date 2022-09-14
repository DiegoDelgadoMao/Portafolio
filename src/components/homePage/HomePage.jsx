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
					Soy Diego Mauricio Delgado Espinosa, Front-end developer creando aplicaciones web enfocadas en la experiencia de usuario.
				</h1>
				<button onClick={handleClick} className='homePageBtn'>
					<p>Conoce más</p>
					<RiArrowRightFill style={styleBaseIcon} />
				</button>
				<SocialNetworks />
			</main>
			<FooterHomePage />
		</div>
	);
};
