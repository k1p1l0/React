import { applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
};

const reducer = (state=initialState, action) => {

	switch (action.type) {
		case 'FETCH_USERS_PENDING': {
			return Object.assign({}, state, {
				fetching: true
			});

			break;
		}
		case 'FETCH_USERS_REJECTED': {
			return Object.assign({}, state, {
				fetching: false, 
				error: action.payload
			});

			break;
		}
		case 'FETCH_USERS_FULFILLED': {
			return Object.assign({}, state, {
				fetching: false, 
				fetched: true, 
				users: action.payload.data
			});

			break;
		}
	}

	return state;
};

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch({
	type: 'FETCH_USERS',
	payload: axios.get('http://rest.learncode.academy/api/wstern/users')
});