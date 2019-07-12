import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ name }) => {
	return <div>{name}</div>;
};

export default Task;

Task.propTypes = {
	name: PropTypes.string.isRequired,
};
