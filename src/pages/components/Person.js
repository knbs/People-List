import React from 'react'
import { Trash } from '../../utils/icons'
import './Person.css'

const Person = (props) => (
	<div className="Person">
		<div className="btn-group" role="group">
			<button
				type="button"
				className={`btn btn-${props.selected ? 'primary': 'light'}`}
				onClick={() => props.onClick(props.personId)}
			>{props.name}</button>
			<button
				type="button"
				className={`btn btn-${props.selected ? 'primary': 'light'}`}
				onClick={() => props.onDelete(props.personId)}
			>
				<Trash/>
			</button>
		</div>
	</div>
);

export default Person;