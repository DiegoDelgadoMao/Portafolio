import React from 'react';

import {
	RiGithubFill,
	RiInstagramFill,
	RiTwitterFill,
	RiLinkedinBoxFill,
} from 'react-icons/ri';

export const SocialNetworks = () => {
	const styleBaseIcon = {
		fontSize: '2.5rem',
	};
	return (
		<div className='socialNetworks'>
			<a
				href='https://github.com/DiegoDelgadoMao'
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiGithubFill style={styleBaseIcon} />
			</a>
			<a
				href='https://twitter.com/diegoDelgado_01'
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiTwitterFill style={styleBaseIcon} />
			</a>
			<a
				href='https://www.linkedin.com/in/diegodelgadomao/'
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiLinkedinBoxFill style={styleBaseIcon} />
			</a>
			<a
				href='https://www.instagram.com/diegodelgadomao/'
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiInstagramFill style={styleBaseIcon} />
			</a>
		</div>
	);
};
