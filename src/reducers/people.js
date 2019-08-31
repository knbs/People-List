import { Map as map } from 'immutable'
import uid from 'uid';
import {
	PERSON_SELECTED,
	ADD_PERSON,
	UPDATE_PERSON,
	DELETE_PERSON
} from '../action-types/index'

const initialState = map({
	current: null,
	list: map({
		'8gi55rt':{
			name: 'Juan',
			description: 'Alto, moreno y guapo'
		}
	})
});

function people(state = initialState, action) {
	switch(action.type){
		case PERSON_SELECTED:
			return state.set('current', action.payload.value);
		case ADD_PERSON: {
			return state.merge({
				current: null,
				list: state.get('list').set(uid(), action.payload.info)
			});
		}
		case UPDATE_PERSON: {
			const personId = action.payload.personId
			const info = action.payload.info;
			return state.merge({
				current: null,
				list: state.get('list').set(personId, info)
			});
		}
		case DELETE_PERSON:
			console.dir(action.payload.personId);
			console.dir(state.get('list').delete('2').toJS());
			return state.set('list', state.get('list').delete(action.payload.personId));
		default:
			return state;
	}
}

export default people;