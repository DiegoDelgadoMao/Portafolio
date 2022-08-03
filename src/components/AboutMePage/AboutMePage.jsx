import React, { useContext } from 'react';
import Profile from '../../assets/perfil.jpeg';
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

import '../../sass/aboutMePage.scss';

import screenProject1 from '../../assets/screen-ogo.png';
import screenProject2 from '../../assets/screen-mimercado.png';
import screenProject3 from '../../assets/screen-matematico.png';
import screenProject4 from '../../assets/screen-game.png';

export const AboutMePage = () => {
	const styleBaseIcon = { fontSize: '3rem' };
	const styleBaseIconSmall = { fontSize: '2rem' };
	const { state } = useContext(theContext);
	return (
		<div className={!state.aboutMe ? 'hidden' : 'aboutMePage'}>
			<header>
				<img src={Profile} alt='Foto de Diego Mauricio Delgado E.' />
			</header>
			<main>
				<h2>¿QUIEN SOY?</h2>
				<p className='aboutMe-paragraph'>
					Me llamo Diego Mauricio Delgado Espinosa. Soy de Colombia. Me encanta
					aprender cosas nuevas referentes a la tecnología (programación para
					ser específico), y también sobre finanzas. Me gusta leer libros a
					cerca de la conducta humana, novelas de ciencia ficción y lo que se me
					atraviese que me llame la atención.
				</p>
				<p className='aboutMe-paragraph'>
					Aquí podrás encontrar algunos de mis trabajos más reciente y las
					tecnologías que manejo y tengo conocimiento. Espero sea de tu agrado
					:)
				</p>
				<h2>TECNOLOGIAS QUE MANEJO</h2>
				<div className='technologies-container'>
					<div className='technology'>
						<DiHtml5 style={styleBaseIcon} />
						<span>Html5</span>
					</div>
					<div className='technology'>
						<DiCss3 style={styleBaseIcon} />
						<span>Css3</span>
					</div>
					<div className='technology'>
						<DiJsBadge style={styleBaseIcon} />
						<span>Javascript</span>
					</div>
					<div className='technology'>
						<DiGit style={styleBaseIcon} />
						<span>Git</span>
					</div>
					<div className='technology'>
						<DiGithubBadge style={styleBaseIcon} />
						<span>Github</span>
					</div>
					<div className='technology'>
						<DiReact style={styleBaseIcon} />
						<span>React</span>
					</div>
					<div className='technology'>
						<DiSass style={styleBaseIcon} />
						<span>Sass</span>
					</div>
					<div className='technology'>
						<DiNpm style={styleBaseIcon} />
						<span>npm</span>
					</div>
				</div>
				<h2>Proyectos</h2>
				<div className='container-projects'>
					<div className='project'>
						<img src={screenProject1} />
						<div className='project-info'>
							<h2>Ogo</h2>
							<p>
								Un software para llevar tus finanzas personales al siguiente
								nivel con un presupuesto tradicional
							</p>
							<h3>Se incluyeron tecnologias como:</h3>
							<div className='project-info__technologiesPackage'>
								<DiHtml5 style={styleBaseIconSmall} />
								<DiCss3 style={styleBaseIconSmall} />
								<DiJsBadge style={styleBaseIconSmall} />
								<DiSass style={styleBaseIconSmall} />
							</div>
							<div className='project-info__btns'>
								<a
									href='https://github.com/DiegoDelgadoMao/ogo-finanzas/'
									target='_blank'
								>
									<span>Ver código</span>
									<RiFileCodeFill style={styleBaseIconSmall} />
								</a>
								<a href='https://ogo-finanzas.netlify.app/' target='_blank'>
									<span>Ver proyecto</span>
									<RiEye2Line style={styleBaseIconSmall} />
								</a>
							</div>
						</div>
					</div>
					<div className='project'>
						<img src={screenProject2} />
						<div className='project-info'>
							<h2>Mi mercado</h2>
							<p>
								Lleva tus cuentas a la hora de mercar de mejor manera. Bye
								calculadora.
							</p>
							<h3>Se incluyeron tecnologias como:</h3>
							<div className='project-info__technologiesPackage'>
								<DiHtml5 style={styleBaseIconSmall} />
								<DiCss3 style={styleBaseIconSmall} />
								<DiJsBadge style={styleBaseIconSmall} />
								<DiReact style={styleBaseIconSmall} />
							</div>
							<div className='project-info__btns'>
								<a
									href='https://github.com/DiegoDelgadoMao/mi-mercado-proyecto'
									target='_blank'
								>
									<span>Ver código</span>
									<RiFileCodeFill style={styleBaseIconSmall} />
								</a>
								<a
									href='https://diegodelgadomao.github.io/mi-mercado-proyecto/'
									target='_blank'
								>
									<span>Ver proyecto</span>
									<RiEye2Line style={styleBaseIconSmall} />
								</a>
							</div>
						</div>
					</div>
					<div className='project'>
						<img src={screenProject3} />
						<div className='project-info'>
							<h2>Mr matematico</h2>
							<p>Te permite sacar el descuento, promedio, moda, entre otros.</p>
							<h3>Se incluyeron tecnologias como:</h3>
							<div className='project-info__technologiesPackage'>
								<DiHtml5 style={styleBaseIconSmall} />
								<DiCss3 style={styleBaseIconSmall} />
								<DiJsBadge style={styleBaseIconSmall} />
							</div>
							<div className='project-info__btns'>
								<a
									href='https://github.com/DiegoDelgadoMao/mini-asistente-matematico'
									target='_blank'
								>
									<span>Ver código</span>
									<RiFileCodeFill style={styleBaseIconSmall} />
								</a>
								<a href='https://mr-matematico.netlify.app/' target='_blank'>
									<span>Ver proyecto</span>
									<RiEye2Line style={styleBaseIconSmall} />
								</a>
							</div>
						</div>
					</div>
					<div className='project'>
						<img src={screenProject4} />
						<div className='project-info'>
							<h2>Piedra, papel, tijera</h2>
							<p>El tradicional juego de piedra, papel o tijera online</p>
							<h3>Se incluyeron tecnologias como:</h3>
							<div className='project-info__technologiesPackage'>
								<DiHtml5 style={styleBaseIconSmall} />
								<DiCss3 style={styleBaseIconSmall} />
								<DiJsBadge style={styleBaseIconSmall} />
							</div>
							<div className='project-info__btns'>
								<a
									href='https://github.com/DiegoDelgadoMao/piedra-papel-tijera-juego'
									target='_blank'
								>
									<span>Ver código</span>
									<RiFileCodeFill style={styleBaseIconSmall} />
								</a>
								<a
									href='https://piedra-papel-o-tijera-juego.netlify.app/'
									target='_blank'
								>
									<span>Ver proyecto</span>
									<RiEye2Line style={styleBaseIconSmall} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
			<GeneralFooter />
		</div>
	);
};
