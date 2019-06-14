import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import getAvatar from '../../../utils/avatar';

class ChatUsers extends Component {
	render() {
		return (
			<div className="card mb-sm-3 mb-md-0 contacts_card">
				<div className="card-header">
					<div className="input-group">
						<input
							type="text"
							placeholder="Buscar..."
							name=""
							className="form-control search"
						/>
						<div className="input-group-prepend">
							<span className="input-group-text search_btn">
								<FontAwesomeIcon icon={faSearch} />
							</span>
						</div>
					</div>
				</div>
				<div className="card-body contacts_body">
					<ul className="contacts">
						<li>
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img
										src={getAvatar('rodrigo.duenas@tecsup.edu.pe')}
										alt="user"
										className="rounded-circle user_img"
									/>
									<span className="online_icon offline" />
								</div>
								<div className="user_info">
									<span>Juan Perez</span>
									<p>Juan se conecto 7 mins atás</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="card-footer" />
			</div>
		);
	}
}

export default ChatUsers;
