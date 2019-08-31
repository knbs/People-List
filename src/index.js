import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Map as map } from 'immutable';
import { createLogger }  from 'redux-logger';
import reducer from './reducers/index';
import './index.css';

import Home from './pages/containers/Home';

const store = createStore(
	reducer,
	map(),
	composeWithDevTools(
		applyMiddleware(
			createLogger({
				collapsed: true,
				stateTransformer: state => state.toJS()
			})
		)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
