import React from 'react';
import ReactDOM from 'react-dom';
import {CommentList, CommentForm} from './tutorial2';

var App = React.createClass({
	render: function () {
		return <div>
			<CommentList name='Kirill'/>
			<CommentForm/>
		</div>
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));