import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../components/Carousel/Carousel';

const Home = () => {
	return (
		<div>
			<Fragment>
				<Carousel />
				<br />
				<div className="container">
					<div className="jumbotron">
						<h1>Bienvenido a mi aplicación!</h1>
						<p>
							<Link className="btn btn-primary btn-lg" to="login">
								Iniciar sesion
							</Link>
						</p>
					</div>
				</div>
			</Fragment>
		</div>
	);
};

export default Home;
