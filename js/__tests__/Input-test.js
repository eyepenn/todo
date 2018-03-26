jest
	.dontMock('../source/components/Input')
;

import React from 'react';
import TestUtils from 'react-dom/test-utils';

const Input = require('../source/components/Input').default;

describe('form works', () => {
	it('renders correct input', () => {
		expect(
			TestUtils.findRenderedDOMComponentWithTag(
				TestUtils.renderIntoDocument(<Input />),'input').type).toBe('text');
	});
		
	it('renders input value', () => {
	    let view = TestUtils.renderIntoDocument(<Input type="text" />);
	    var input = TestUtils.scryRenderedDOMComponentsWithTag(view, 'input')[0];
	 	expect(input.value).toBe('');
  });
});