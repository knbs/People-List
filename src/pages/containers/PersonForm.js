import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class PersonForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const current = this.props.current;
		const info = {
			name: e.target.name.value,
			description: e.target.description.value
		}
		if(current){
			this.props.actions.updatePerson(current, info);
		}else{
			this.props.actions.addPerson(info);
		}
		this.props.actions.toogleForm(false);
	}

	handleCancel = () => {
		this.props.actions.personSelected(null);
		this.props.actions.toogleForm(false);
	}
	render() {
		return (
			<div className="col-md-7 col-lg-6">
				<form key={this.props.current} onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Nombre:</label>
						<input
							name="name"
							type="text"
							className="form-control"
							placeholder="Ingresa el nombre..."
							defaultValue={this.props.name}
							required
						/>
					</div>
					<div className="form-group">
						<label>Descripción:</label>
						<textarea
							name="description"
							className="form-control"
							rows="5"
							placeholder="Añade una descripción..."
							defaultValue={this.props.description}
						/>
					</div>
					<div className="container-fluid" style={{padding: 0}}>
						<button
							type="button"
							className="btn btn-light"
							onClick={this.handleCancel}
						>
							Cancelar
						</button>
						<button
							className="float-right btn btn-info"
						>
							{this.props.current ? 'Guardar' : 'Crear'}
						</button>

					</div>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	const current = state.get('people').get('current');
	const personInfo = state.get('people').get('list').get(current);
	return {
		current,
		name: personInfo ? personInfo.name : '',
		description: personInfo ? personInfo.description : '',
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonForm);