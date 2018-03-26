import React from 'react';
import PropTypes from 'prop-types';
import CRUDActions from '../flux/CRUDActions';

class Input extends React.Component {

_handleKeyPress(e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		let task = {};
		task[e.target.id] = e.target.value;
		CRUDActions.create(task);
		e.target.value = '';
	}
}
	render() {
		return (
			<input
			id="task"
			type="text"
			onKeyPress={this._handleKeyPress.bind(this)}
			placeholder="What are some things to do?" />
		);
	}
}
Input.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string
};

export default Input