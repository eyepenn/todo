'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import CRUDStore from './flux/CRUDStore';
import Logo from './components/Logo';
import ToDo from './components/ToDo';
import schema from './schema';

CRUDStore.init(schema);

ReactDOM.render(
<div>
	<h1><Logo /> To-Do Checklist</h1>
	<ToDo />
</div>,
	document.getElementById('app')
);