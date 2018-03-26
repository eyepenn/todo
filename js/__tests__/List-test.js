jest.autoMockOff();

import React from 'react';
import TestUtils from 'react-dom/test-utils';

const List = require('../source/components/List').default;
const schema = require('../source/schema').default;
const Store = require('../source/flux/CRUDStore').default;

Store.init(schema);

let data = [{}];
schema.forEach(task => data[0][task.id] = task.sample);

describe('Editing data', () => {
	it('deletes data', () => {
		const table = TestUtils.renderIntoDocument(<List />);
		TestUtils.Simulate.click(
			TestUtils.findRenderedDOMComponentWithClass(table, 'ActionsDelete'));
		TestUtils.Simulate.click(
			TestUtils.findRenderedDOMComponentWithClass(table, 'Button'));
		expect(TestUtils.scryRenderedDOMComponentsWithTag(table, 'li').length).toBe(0);
	});
});
