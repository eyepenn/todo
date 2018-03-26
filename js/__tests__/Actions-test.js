jest
	.dontMock('../source/components/Actions')
	.dontMock('./Wrap')
;

import React from 'react';
import TestUtils from 'react-dom/test-utils';

const Actions = require('../source/components/Actions').default;
const Wrap = require('./Wrap').default;

describe('Click some actions', () => {
	it('calls you back', () => {
		const callback = jest.genMockFunction();
		const actions = TestUtils.renderIntoDocument(
		<Wrap><Actions onAction={callback} /></Wrap>
		);
		TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(actions, 'span'));
		const calls = callback.mock.calls;
		expect(calls[0][0]).toEqual('delete');
	});
});

