jest
  .dontMock('../source/components/Dialog')
  .dontMock('../source/components/Button')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

const Dialog = require('../source/components/Dialog').default;

describe('renders with action buttons', () => {
  it('has a cancel button', () => {
    const dialog = TestUtils.renderIntoDocument(
      <Dialog header="head">Test dialog</Dialog>
    );
    const cancel = TestUtils
      .findRenderedDOMComponentWithClass(dialog, 'DialogDismiss');
    expect(cancel.nodeName).toBe('SPAN');

    const ok = TestUtils
      .findRenderedDOMComponentWithTag(dialog, 'button');
    expect(ok.textContent).toBe(Dialog.defaultProps.confirmLabel)
  });
  
  it('can have a modal', () => {
     const dialog = TestUtils.renderIntoDocument(
      <Dialog modal={true} header="head">Test dialog</Dialog>
     );
    expect(Array.from(document.body.classList)).toContain('DialogModalOpen');
    
    //close the dialog
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(dialog).parentNode);
    expect(Array.from(document.body.classList)).not.toContain('DialogModalOpen');
  });
  
  it('has a head and body', () => {
     const dialog = TestUtils.renderIntoDocument(
     <Dialog header="head">Test dialog</Dialog>
     );
    let node = ReactDOM.findDOMNode(dialog);
    expect(node.getElementsByClassName('DialogHeader')[0].innerHTML).toBe('head');
    expect(node.querySelector('.DialogBody').textContent).toBe('Test dialog');
  });
  
  it('sends correct actions', () => {
    const callback = jest.genMockFunction();
    
    const yescancel = TestUtils.renderIntoDocument(
    <Dialog onAction={callback} />
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(yescancel, 'span'));
    
    const nocancel = TestUtils.renderIntoDocument(
      <Dialog onAction={callback} />
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(nocancel, 'button'));
    
    const calls = callback.mock.calls;
    expect(calls.length).toBe(2);
    expect(calls[0][0]).toEqual('dismiss');
    expect(calls[1][0]).toEqual('confirm');
  });
});