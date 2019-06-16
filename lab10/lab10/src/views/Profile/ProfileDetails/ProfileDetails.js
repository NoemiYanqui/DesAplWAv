import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faEdit,
	faKey,
	faCameraRetro
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import getAvatar from '../../../utils/avatar';

import './ProfileDetails.css';

class ProfileDetails extends Component {
	state = {
		userName: '',
		email: ''
	};
	/*	componentDidMount() {
		this.setState({
			userName: localStorage.getItem('userName'),
			email: localStorage.getItem('email')
		});
	}
	*/
	passwordHandler = e => {
		alert('Funcion por implementar');
	};
	pictureHandler = e => {
		alert('Funcion por implementar');
	};
	render() {
		const urlLorem = 'https://www.lipsum.com/feed/html';
		return (
			<Tab.Container id="profile-tabs" defaultActiveKey="inicio">
				<div className="row pt-4">
					<div className="col-md-3">
						<div className="profile-img">
							<img
								src={getAvatar(this.props.email)}
								className="rounded-circle user_img"
								alt=""
							/>
						</div>
					</div>
					<div className="col-md-7">
						<div className="profile-head">
							<h5>
								<FontAwesomeIcon icon={faUser} /> {this.props.userName}
							</h5>
							<h6>Web Developer y Diseñador</h6>
							<p className="profile-rating">
								RANKINGS: <span>8/10</span>
							</p>
							<Nav>
								<Nav.Item>
									<Nav.Link className="profile-tab" eventKey="inicio">
										Tab 1
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link className="profile-tab" eventKey="mensajes">
										Tab 2
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</div>
					</div>
					<div className="col-md-2">
						<button
							className="btn btn-info btn-block"
							onClick={() => this.props.history.push('/profile/edit')}
						>
							<FontAwesomeIcon icon={faEdit} /> Editar Perfil
						</button>
						<button
							className="btn btn-primary btn-block"
							onClick={this.pictureHandler}
						>
							<FontAwesomeIcon icon={faCameraRetro} /> Imagen
						</button>
						<button
							className="btn btn-primary btn-block"
							onClick={this.passwordHandler}
						>
							<FontAwesomeIcon icon={faKey} /> Contraseña
						</button>
					</div>
				</div>
				<div className="row pb-4">
					<div className="col-md-3">
						<ul className="list-group">
							<li className="list-group-item text-muted">
								Actividad <i className="fa fa-deshboard fa-1x" />
							</li>
							<li className="list-group-item text-right">
								<span className="pull-left">
									<strong>Shares</strong>
								</span>{' '}
								125
							</li>
							<li className="list-group-item text-right">
								<span className="pull-left">
									<strong>Likes</strong>
								</span>{' '}
								13
							</li>
							<li className="list-group-item text-right">
								<span className="pull-left">
									<strong>Posts</strong>
								</span>{' '}
								37
							</li>
						</ul>
					</div>
					<div className="col-md-7">
						<Tab.Content>
							<Tab.Pane className="profile-pane" eventKey="inicio">
								Para generar el texto Lorem Ipsum utilizaremos la URL:
								<a href={urlLorem} target="_blank" rel="noopener noreferrer">
									{urlLorem}
								</a>
							</Tab.Pane>
							<Tab.Pane className="profile-pane" eventKey="mensajes">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus
							</Tab.Pane>
						</Tab.Content>
					</div>
				</div>
			</Tab.Container>
		);
	}
}
const mapStateToProps = state => {
	return {
		userName: state.userName,
		email: state.email
	};
};
export default connect(mapStateToProps)(ProfileDetails);
