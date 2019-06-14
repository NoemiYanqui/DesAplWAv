import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Details from './views/Details';
import Login from './views/Login';
import Layout from './hoc/Layout/Layout';
import Welcome from './views/Welcome';
import Chat from './views/Chat/Chat';
import NotFound from './views/NotFound';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/details" exact component={Details} />
						<Route path="/login" exact component={Login} />
						<Route path="/welcome" exact component={Welcome} />
						<Route path="/chat" exact component={Chat} />

						<Route
							path="/logout"
							render={() => {
								localStorage.removeItem('userId');
								localStorage.removeItem('userName');
								localStorage.removeItem('userToken');
								return <Redirect to="/login" />;
							}}
						/>

						<Route component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
