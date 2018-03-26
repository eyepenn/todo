import React from 'react';
import PropTypes from 'prop-types';

const Actions = (props) => 
<div className="Actions">
	<span 
	className="ActionsDelete"
	title="Delete"
	onClick={props.onAction.bind(null, 'delete')}>X</span>
</div>

Actions.propTypes = {
	onAction: PropTypes.func
};

Actions.defaultProps = {
	onAction: () => {}
};

export default Actions