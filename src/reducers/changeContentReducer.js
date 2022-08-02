import { CHANGE_CONTENT_TYPES } from '../actions/changeContentTypes';

export const initialState = {
	homePage: true,
	articles: false,
	aboutMe: false,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case CHANGE_CONTENT_TYPES.ACTIVE_HOME_PAGE:
			return {
				homePage: true,
				articles: false,
				aboutMe: false,
			};
			break;
		case CHANGE_CONTENT_TYPES.ACTIVE_ARTICLES_PAGE:
			return {
				homePage: false,
				articles: true,
				aboutMe: false,
			};
			break;
		case CHANGE_CONTENT_TYPES.ACTIVE_ABOUT_ME_PAGE:
			return {
				homePage: false,
				articles: false,
				aboutMe: true,
			};
	}
};
