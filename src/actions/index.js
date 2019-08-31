import {
	TOOGLE_FORM,
	PERSON_SELECTED,
	ADD_PERSON,
	UPDATE_PERSON,
	DELETE_PERSON,
} from '../action-types/index'

export function toogleForm(value) {
	return {
		type: TOOGLE_FORM,
		payload: {
			value
		}
	}
}

export function personSelected(value) {
	return {
		type: PERSON_SELECTED,
		payload: {
			value
		}
	}
}

export function addPerson(info) {
	return {
		type: ADD_PERSON,
		payload: {
			info
		}
	}
}

export function updatePerson(personId, info) {
	return {
		type: UPDATE_PERSON,
		payload: {
			personId,
			info
		}
	}
}

export function deletePerson(personId) {
	return {
		type: DELETE_PERSON,
		payload: {
			personId
		}
	}
}