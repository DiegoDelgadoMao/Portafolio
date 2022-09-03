// DiHtml5 => html
// DiCss3 => css
// DiJsBadge => js
// DiReact => react
// DiSass => sass


import screenProject1 from '../assets/screen-ogo.png';
import screenProject2 from '../assets/screen-mimercado.png';
import screenProject3 from '../assets/screen-matematico.png';
import screenProject4 from '../assets/screen-game.png';
import screenProject5 from '../assets/screen-store.png';

export const projects = [
	{
		name: 'Easy Buy RO',
		description: 'Una tienda de ropa y accesorios online',
		img: screenProject5,
		tecnologies: ['React', 'Javascript', 'Sass'],
		links: [{ demo: 'https://easy-buy-ro.vercel.app' }]
	},
	{
		name: 'Ogo',
		description: 'Un software para llevar tus finanzas personales al siguiente nivel con un presupuesto tradicional',
		img: screenProject1,
		tecnologies: ['Javascript', 'Html5', 'Sass'],
		links: [{ demo: 'https://ogo-finanzas.netlify.app/' }, { repo: 'https://github.com/DiegoDelgadoMao/ogo-finanzas/' }]
	},
	{
		name: 'Mi mercado',
		description: 'Lleva tus cuentas a la hora de mercar de mejor manera. Bye calculadora.',
		img: screenProject2,
		tecnologies: ['React', 'Javascript', 'Css'],
		links: [{ demo: 'https://diegodelgadomao.github.io/mi-mercado-proyecto/' }, { repo: 'https://github.com/DiegoDelgadoMao/mi-mercado-proyecto' }]
	},
	{
		name: 'Mr Matematico',
		description: 'Te permite sacar el descuento, promedio, moda, entre otros.',
		img: screenProject3,
		tecnologies: ['Html5', 'Javascript', 'Css'],
		links: [{ demo: 'https://mr-matematico.netlify.app/' }, { repo: 'https://github.com/DiegoDelgadoMao/mini-asistente-matematico' }]
	},
	{
		name: 'Piedra,papel, tijera',
		description: 'El tradicional juego de piedra, papel o tijera online',
		img: screenProject4,
		tecnologies: ['Html', 'Javascript', 'Css'],
		links: [{ demo: 'https://piedra-papel-o-tijera-juego.netlify.app/' }, { repo: 'https://github.com/DiegoDelgadoMao/piedra-papel-tijera-juego' }]
	},
]