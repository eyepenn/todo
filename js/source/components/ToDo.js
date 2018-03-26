import React from 'react';
import Input from './Input';
import List from './List';

class ToDo extends React.Component {

	render() {
		return (
			<div className="ToDoList">
			<Input />
			<List />
			</div>
		);
	}
}

export default ToDo