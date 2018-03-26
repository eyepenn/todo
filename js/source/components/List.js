import React from 'react';
import CRUDStore from '../flux/CRUDStore';
import CRUDActions from '../flux/CRUDActions';
import Actions from './Actions';
import Dialog from './Dialog';

class List extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      data: CRUDStore.getData(),
      dialog: null
    };
    this.schema = CRUDStore.getSchema();
    CRUDStore.addListener('change', () => {
      this.setState({
        data: CRUDStore.getData()
      })
    });
}
  
componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.initialData});
}

_actionClick(rowidx, action) {
	this.setState({dialog: {type: action, idx: rowidx}});
}

_closeDialog() {
  this.setState({dialog: null});
}

_deleteConfirmationClick(action) {
	this.setState({dialog: null});
  if(action === 'dismiss') {
		return;
	}
  const index = this.state.dialog && this.state.dialog.idx;
  CRUDActions.delete(index);
}

	render() {
		return (
			<div className="List">
				{this._renderList()}
				{this._renderDialog()}
			</div>
		);
	}

  _renderList() {
    return (
      <ul>
      {this.state.data.map((row, rowidx) => {
      return (
        <li key={rowidx} className="item">
            <div className="description">{
            Object.keys(row).map((cell, idx) => {
                const schema = this.schema[idx];
                if (!schema || !schema.show) {
                  return null;
                }
                let content = row[cell];
                return (
                <div
                key={idx}
                data-row={rowidx}
                data-key={schema.id}
                >
                {content}
                </div>
                );
              }, this)}
              </div>
              <Actions onAction={this._actionClick.bind(this, rowidx)}/>
            </li>
          );
        })}</ul>
      );
    }

_renderDialog() {
	if (!this.state.dialog) {
		return null;
	}
	switch (this.state.dialog.type) {
		case 'delete':
			return this._renderDeleteDialog();
		default:
			throw Error(`Unexpected dialog type ${this.state.dialog.type}`);	
		}
}

_renderDeleteDialog() {
  const first = this.state.data[this.state.dialog.idx];
  const nameguess = first[Object.keys(first)[0]];
    return (
      <Dialog 
        modal={true}
        header="Confirm deletion"
        confirmLabel="Delete"
        onAction={this._deleteConfirmationClick.bind(this)}
      >
        <span
         className="confirm">{`Are you sure you want to delete "${nameguess}" ?`}</span>
      </Dialog>
    );
  }
}

export default List
