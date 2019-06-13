import React from 'react';
const Welcome = props => {
	const username = localStorage.getItem('userName');
	return (
		<div name="container">
			<div className="jumbotron">
				<h1>Bienvenido {username}!</h1>
			</div>
		</div>
	);
};
export default Welcome;
