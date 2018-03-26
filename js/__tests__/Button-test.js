jest
	.dontMock('../source/components/Button')
	.dontMock('classnames')
	.dontMock('./Wrap')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

const Button = require('../source/components/Button').default;
const Wrap = require('./Wrap').default;

describe('Render Button components', () => {
	it('renders <a> vs <button>', () => {
		const button = TestUtils.renderIntoDocument(
			<Wrap><Button>Hello</Button></Wrap>
		);
		expect(ReactDOM.findDOMNode(button).children[0].nodeName).toEqual('BUTTON');

		const a = TestUtils.renderIntoDocument(
			<Wrap><Button href="#">Hello</Button></Wrap>
		);
		expect(ReactDOM.findDOMNode(a).children[0].nodeName).toEqual('A');
	});

	it('allows custom CSS classes', () => {
		const button = TestUtils.renderIntoDocument(
			<Wrap><Button className="good bye">Hello</Button></Wrap>
		);
		const buttonNode = ReactDOM.findDOMNode(button).children[0];
		expect(buttonNode.getAttribute('class')).toEqual('Button good bye');
	});
});