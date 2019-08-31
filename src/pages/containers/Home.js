import React from 'react';
import { connect } from 'react-redux';

import Directory from './Directory'

import HomeLayout from '../components/HomeLayout'
import Navbar from '../components/Navbar'
import NoSelection from '../components/NoSelection'
import PersonForm from './PersonForm'

class Home extends React.Component {
	render() {
		return (
			<HomeLayout>
				<Navbar/>
				<div className="container-fluid h-100">
					<div className="row h-100">
						<div className="side-menu col-sm-3">
							<Directory/>
						</div>
						<div className="info-container col-sm-9">
							{this.props.formVisible ?
								<PersonForm /> :
								<NoSelection/>
							}
						</div>
					</div>
				</div>
			</HomeLayout>
		);
	}
}

function mapStateToProps(state, props) {
	const formVisible = state.get('personForm').get('visible');
	return {formVisible}
}

export default connect(mapStateToProps)(Home);