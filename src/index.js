import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GeneralContext } from './context/theContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GeneralContext>
			<App />
		</GeneralContext>
	</React.StrictMode>
);
