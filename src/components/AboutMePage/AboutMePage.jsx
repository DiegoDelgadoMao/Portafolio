import React, { useContext } from 'react';
import Profile from '../../assets/profile1.jpeg';
import {
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiGit,
	DiGithubBadge,
	DiReact,
	DiSass,
	DiNpm,
} from 'react-icons/di';

import { RiFileCodeFill, RiEye2Line } from 'react-icons/ri';

import { GeneralFooter } from '../GeneralFooter/GeneralFooter';
import { theContext } from '../../context/theContext';

import { projects } from '../../data';

export const AboutMePage = () => {
	const { state } = useContext(theContext);
	return (
		<div className={!state.aboutMe ? 'hidden' : 'aboutMePage'}>
			<header>
				<img loading='lazy' src={Profile} alt='Foto de Diego Mauricio Delgado E.' />
			</header>
			<main>
				<h2>¿QUIEN SOY?</h2>
				<p className='aboutMe-paragraph'>
					Soy Front-end Developer con experiencia en la creación de productos
					digitales por medio de la web, enfocando estas aplicaciones web en la experiencia de usuarios.
				</p>
				<p className='aboutMe-paragraph'>
					Disfruto la creacion de aplicaciones web, aprender tecnologias como javascript y crear cosas con ellas. Quiero involucrarme en todo el flujo del desarrollo web, para posteriormemte crear grandiosas cosas por medio de la web,
				</p>
				<p className='aboutMe-paragraph'>
					Me he enfocado en crear proyectos en los que busco resolver un problema en particular y presentar esta solución de la manera más simple posible y visualmente agradable, por ende por medio de tecnologias como react busco que los usuarios tengan una gran experiencia en la navegacion de la aplicacion web.
				</p>
				<h2>TECNOLOGIAS QUE MANEJO</h2>
				<div className='technologies-container'>
					<div className='technology'>
						<DiHtml5 />
						<span>Html5</span>
					</div>
					<div className='technology'>
						<DiCss3 />
						<span>Css3</span>
					</div>
					<div className='technology'>
						<DiJsBadge />
						<span>Javascript</span>
					</div>
					<div className='technology'>
						<DiGit />
						<span>Git</span>
					</div>
					<div className='technology'>
						<DiGithubBadge />
						<span>Github</span>
					</div>
					<div className='technology'>
						<DiReact />
						<span>React</span>
					</div>
					<div className='technology'>
						<DiSass />
						<span>Sass</span>
					</div>
					<div className='technology'>
						<DiNpm />
						<span>npm</span>
					</div>
				</div>
				<h2>Proyectos</h2>
				<div className='container-projects'>
					{projects.map((item => (
						<div key={item.name} className='project'>
							<img loading='lazy' src={item.img} alt={`imagen del proyecto ${item.name}`} />
							<div className='project-info'>
								<h2>{item.name}</h2>
								<p>{item.description}</p>
								<h3>Se incluyeron tecnologias como:</h3>
								<div className='project-info__technologiesPackage'>
									{item.tecnologies.map((Technology, index) => (
										<p key={`${item.name}-tech-${index}`}>{Technology}</p>
									))}
								</div>
								<div className='project-info__btns'>
									{item.links.map((link, index) => {
										if (!index) {
											return <a
												key={`${item.name}-link-${index}`}
												href={link.demo}
												target='__blank'>
												VerProyecto
												<RiEye2Line />
											</a>
										} else {
											return <a
												key={`${item.name}-link-${index}`}
												href={link.repo}
												target='__blank'>
												Ver código
												<RiFileCodeFill />
											</a>
										}
									})}
								</div>
							</div>
						</div>
					)))}
				</div>
			</main>
			<GeneralFooter />
		</div>
	);
};
