import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import axios from '../../../utils/axios';
import { PROFILE_EDIT } from '../../../utils/urls';

import Spinner from '../../../components/Spinner/Spinner';

class ProfileEdit extends Component {
	state = {
		username: this.props.username,
		email: this.props.email,
		loading: false
	};
	/*	componentDidMount() {
		this.setState({
			username: localStorage.getItem('userName'),
			email: localStorage.getItem('email')
		});
	}
*/
	inputHandler = (event, field) => {
		this.setState({ [field]: event.target.value });
	};
	submitHandler = e => {
		e.preventDefault();
		const data = {
			username: this.state.username,
			email: this.state.email
		};
		this.setState({ loading: true });
		axios({
			...PROFILE_EDIT,
			headers: {
				Authorization: this.props.token
			},
			data: data
		})
			.then(response => {
				console.log(response);
				this.setState({ loading: false });
				this.props.history.push('/profile');
				alert('Usuario editado con Éxito');
			})
			.catch(error => {
				console.error(error.response);
				this.setState({ loading: false });
				alert(error.response.data.message);
			});
	};
	goBackHandeler = e => {
		this.props.history.goBack();
	};
	render() {
		let content = <Spinner />;
		if (!this.state.loading) {
			content = (
				<form onSubmit={this.submitHandler}>
					<div className="card-body">
						<div className="form-group">
							<label>Nombre</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ingrese su Nombre"
								value={this.state.username}
								onChange={e => this.inputHandler(e, 'username')}
							/>
						</div>
						<div className="form-group">
							<label>Correo Electronico</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter Email"
								value={this.state.email}
								onChange={e => this.inputHandler(e, 'email')}
							/>
							<small className="form-text text-muted">
								Nunca compartiremos tu email con nadie(Te lo prometo Rick ;)
							</small>
						</div>
					</div>
					<div className="card-footer">
						<button className="btn btn-success" type="submit">
							<FontAwesomeIcon icon={faSave} /> Guardar Perfil
						</button>{' '}
						<button
							className="btn btn-danger"
							type="button"
							onClick={this.goBackHandeler}
						>
							<FontAwesomeIcon icon={faWindowClose} /> Regresar
						</button>
					</div>
				</form>
			);
		}
		return (
			<div className="container d-flex justify-content-center mt-4 mb-4">
				<div className="card">
					<div className="card-header">Editar Perfil</div>
					{content}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		toke: state.token,
		userName: state.userName,
		email: state.email
	};
};
export default connect(mapStateToProps)(ProfileEdit);
