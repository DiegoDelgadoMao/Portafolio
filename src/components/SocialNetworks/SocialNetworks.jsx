import React from 'react';

import {
	RiGithubFill,
	RiInstagramFill,
	RiTwitterFill,
	RiLinkedinBoxFill,
} from 'react-icons/ri';

export const SocialNetworks = () => {
	const socialNetworksUrl = {
		instagram: 'https://www.instagram.com/diegodelgadomao.dev/',
		github: 'https://github.com/DiegoDelgadoMao',
		twitter: 'https://twitter.com/diegoDelgado_01',
		linkedin: 'https://www.linkedin.com/in/diegodelgadomao/'
	}
	return (
		<div className='socialNetworks'>
			<a
				href={socialNetworksUrl.github}
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiGithubFill />
			</a>
			<a
				href={socialNetworksUrl.twitterw}
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiTwitterFill />
			</a>
			<a
				href={socialNetworksUrl.github}
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiLinkedinBoxFill />
			</a>
			<a
				href={socialNetworksUrl.instagram}
				target='_blank'
				className='socialNetwork-container'
			>
				<div className='socialNetwork-container__circle'></div>
				<div className='socialNetwork-container__line'></div>
				<RiInstagramFill />
			</a>
		</div>
	);
};
