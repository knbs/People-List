import React from 'react';
import './HomeLayout.css'

const HomeLayout = (props) => (
	<div className="HomeLayout">
		{props.children}
	</div>
);

export default HomeLayout;