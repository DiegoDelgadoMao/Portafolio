import { Menu } from './components/Menu/Menu';
import { HomePage } from './components/homePage/HomePage';
import { ArticlePage } from './components/ArticlePage/ArticlePage';
import { AboutMePage } from './components/AboutMePage/AboutMePage';

import './sass/index.scss'

function App() {
	return (
		<div className='App'>
			<Menu />
			<HomePage />
			<ArticlePage />
			<AboutMePage />
		</div>
	);
}

export default App;
