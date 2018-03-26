import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => 
  props.href
    ? <a {...props} className={classNames('Button', props.className)}/>
    : <button {...props} className={classNames('Button', props.className)}/>

Button.propTypes = {
  href: PropTypes.string
};

export default Button