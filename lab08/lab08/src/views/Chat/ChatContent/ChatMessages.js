import React from 'react';
import getAvatar from '../../../utils/avatar';

const ChatMessages = props => {
	let email = 'noemi@hotmail.com';
	let classMessage = 'd-flex justify-content-end mb-4';
	if (props.self === 1) {
		email = 'noemi@hotmail.com';
		classMessage = 'd-flex justify-content-end mb-4';
	}
	return (
		<div className={classMessage}>
			<div className="img_cont_msg">
				<img
					src={getAvatar(email)}
					alt={email}
					className="rounded-circle  user_img_msg"
				/>
			</div>
			<div className="msg_cotainer">
				{props.line}
				<span className="msg_time">8:40 am,Today</span>
			</div>
		</div>
	);
};
export default ChatMessages;
