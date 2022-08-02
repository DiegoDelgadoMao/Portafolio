import React, { useState, useReducer } from 'react';

import { reducer } from '../reducers/changeContentReducer';
import { initialState } from '../reducers/changeContentReducer';

export const theContext = React.createContext(null);

export const GeneralContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [darkMode, setDarkMode] = useState(true);

	return (
		<theContext.Provider value={{ state, dispatch, darkMode, setDarkMode }}>
			{children}
		</theContext.Provider>
	);
};
