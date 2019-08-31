import React from 'react'
import DirectoryLayout from '../components/DirectoryLayout'
import Person from '../components/Person'
import * as actions from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NewPerson, Contacts} from '../../utils/icons'

class Directory extends React.Component {
	handlePersonClick = (personId) => {
		this.props.actions.toogleForm(true);
		this.props.actions.personSelected(personId);
	}

	handlePersonDelete = (personId) => {
		if(this.props.current === personId){
			this.props.actions.toogleForm(false);
		}
		this.props.actions.deletePerson(personId);
	}

	handleAddPerson = () => {
		this.props.actions.toogleForm(true);
		this.props.actions.personSelected(null);
	}

	render() {
		const people = this.props.people.toJS();
		const buttonList = [];
		let personId
		for(personId in people){
			buttonList.push(
				<Person
					key={personId}
					name={people[personId].name}
					personId={personId}
					onClick={this.handlePersonClick}
					onDelete={this.handlePersonDelete}
					selected={this.props.current === personId}
				/>
			);
		}
		return (
			<DirectoryLayout>
				<div className="people">
					{buttonList.length ?
						buttonList :
						<div className="alert alert-info" role="alert">
							<Contacts/> There in no people added.<br/>
							<br/>
							Click on "Add Person" below to initialize your directory
						</div>
					}
				</div>
				<div className="mt-auto">
					<button
						id="add-person-btn"
						className="btn btn-block btn-success"
						onClick={this.handleAddPerson}
					><NewPerson /> Add Person</button>
				</div>
			</DirectoryLayout>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		current: state.get('people').get('current'), 
		people: state.get('people').get('list')
	}
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory)