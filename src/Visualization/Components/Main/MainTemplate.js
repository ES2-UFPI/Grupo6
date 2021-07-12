import React from 'react';
import Header from './Header';
import FootBar from './FootBar';

const MainTemplate = ({ children }) => {
	return (
		<div>
			<Header></Header>
			<div>{children}</div>
			<FootBar></FootBar>
		</div>
	);
};

export default MainTemplate;
