import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function MyTitle(props) {
	return ce('div', { style: { color: props.color } }, ce('h1', null, props.title));
};

const MyFirstComponent = function MyFirstComponent() {
	return ce(
		'div',
		null,
		ce(MyTitle, { color: 'rebeccapurple', title: 'House of Cards' }),
		ce(MyTitle, { color: 'peru', title: 'Orange is the new black' }),
		ce(MyTitle, { color: 'burlywood', title: 'Stranger Things' })
	);
};

render(ce(MyFirstComponent), document.getElementById('app'));
