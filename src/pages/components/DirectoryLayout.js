import React from 'react'
import './DirectoryLayout.css'

const DirectoryLayout = (props) => (
	<div className="DirectoryLayout d-flex flex-column">
		{props.children}
	</div>
);

export default DirectoryLayout;