import React, { useContext } from 'react';

import { RiProfileFill } from 'react-icons/ri';

import { theContext } from '../../context/theContext';

import profile from '../../assets/perfil.jpeg';

import { GeneralFooter } from '../GeneralFooter/GeneralFooter';

export const ArticlePage = () => {
	const styleBaseIcon = {
		fontSize: '2.4rem',
	};
	const { state } = useContext(theContext);
	const articles = [
		{
			title: 'titulo del artículo1',
			paragraph:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque ab minus a cumque magnam doloremque omnis iusto id voluptatem?',
			time: '8/1/22',
		},
		{
			title: 'titulo del artículo2',
			paragraph:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque ab minus a cumque magnam doloremque omnis iusto id voluptatem?',
			time: '8/1/22',
		},
		{
			title: 'titulo del artículo3',
			paragraph:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque ab minus a cumque magnam doloremque omnis iusto id voluptatem?',
			time: '8/1/22',
		},
		{
			title: 'titulo del artículo4',
			paragraph:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque ab minus a cumque magnam doloremque omnis iusto id voluptatem?',
			time: '8/1/22',
		},
	];
	return (
		<div className={!state.articles ? 'hidden' : 'articlePage'}>
			<div className='mainArticle-container'>
				<div className='mainArticle'>
					<div className='mainArticle__banner'>
						<span>Artículo más reciente</span>
						<img src='https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
					</div>
					<div className='mainArticle__Article'>
						<h2>Titulo del artículo</h2>
						<p className='mainArticle-paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit, laudantium quo. Temporibus, ratione adipisci
							asperiores voluptatem accusantium
						</p>
						<button>
							<p>Leer más</p>
							<RiProfileFill style={styleBaseIcon} />
						</button>
					</div>
				</div>
			</div>

			<main>
				<h3>Todos Los artículos</h3>
				<div className='containerArticles'>
					{articles.map(article => {
						return (
							<article key={article.title} className='article'>
								<img src='https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
								<h4>{article.title}</h4>
								<p>{article.paragraph}</p>
								<button className='article__btn'>
									<span>Leer más</span>
									<RiProfileFill style={styleBaseIcon} />
								</button>
								<div className='article-footer'>
									<img src={profile} />
									<div className='article-footer__info'>
										<h5>Diego Delgado</h5>
										<time>{article.time}</time>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</main>
			<GeneralFooter />
		</div>
	);
};
