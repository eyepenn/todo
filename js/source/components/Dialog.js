import Button from './Button';
import React from 'react';
import PropTypes from 'prop-types';

class Dialog extends React.Component {

componentWillUnmount() {
  document.body.classList.remove('DialogModalOpen');
}
  
componentDidMount() {
  if (this.props.modal) {
    document.body.classList.add('DialogModalOpen');
  }
}

  render() {
    return (
      <div className="Dialog DialogModal">
      <div className="DialogModalWrap">
      <div className="DialogHeader">{this.props.header}</div>
      <div className="DialogBody">{this.props.children}</div>
      <div className="DialogFooter">
      <span 
      className="DialogDismiss"
      onClick={this.props.onAction.bind(this, 'dismiss')}>
      Cancel
      </span>
      <Button onClick={this.props.onAction.bind(this, 'confirm')}>
      {this.props.confirmLabel}
      </Button>
      </div>
      </div>
      </div>
    );
  }
}

Dialog.propTypes = {
	header: PropTypes.string,
	confirmLabel: PropTypes.string,
	modal: PropTypes.bool,
	onAction: PropTypes.func
};

Dialog.defaultProps = {
	confirmLabel: 'ok',
	modal: false,
	onAction: () => {}
};

export default Dialog