import { Map as map } from 'immutable'
import { TOOGLE_FORM } from '../action-types/index'

const initialState = map({
	visible: false,
});

function personForm(state = initialState, action) {
	switch(action.type){
		case TOOGLE_FORM:
			return state.set('visible', action.payload.value);
		default:
			return state;
	}
}

export default personForm;