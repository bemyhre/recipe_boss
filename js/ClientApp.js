/* global React ReactDOM */
const ce = React.createElement;

const MyTitle = function(props) {
	return ce('div', { style: { color: props.color } }, ce('h1', null, props.title));
};

const MyFirstComponent = function() {
	return ce(
		'div',
		null,
		ce(MyTitle, { color: 'rebeccapurple', title: 'House of Cards' }),
		ce(MyTitle, { color: 'peru', title: 'Orange is the new black' }),
		ce(MyTitle, { color: 'burlywood', title: 'Stranger Things' })
	);
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
