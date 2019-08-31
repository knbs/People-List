import people from './people.js'
import personForm from './personForm.js'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
	people,
	personForm
});

export default rootReducer;