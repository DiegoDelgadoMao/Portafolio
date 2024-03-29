import React from 'react';
import { RiCopyrightFill } from 'react-icons/ri';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

export const GeneralFooter = () => {
	return (
		<footer className='generalFooter'>
			<p>
				Diego Mauricio Delgado E. - <RiCopyrightFill /> 2022
			</p>
			<SocialNetworks />
		</footer>
	);
};
