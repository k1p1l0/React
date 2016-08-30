import React from 'react';
import ReactDOM from 'react-dom';
import {CommentList} from './tutorial2';
import {CommentForm} from './tutorial5';
import {data} from './tutorial8';

var CommentBox = React.createClass({
	loadCommentFromServer: function () {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			catche: false,
			success: function(data) {
				this.setState({data: data})
			}.bind(this),
			error: function(xhr, statur, err) {
				console.error(this.props.url, status, err.toString());
			}
		});
	},

	getInitialState: function () {
		return {
			data: []
		};
	},

	componentDidMount: function () {
		this.loadCommentFromServer();
		setInterval(this.loadCommentFromServer, this.props.pollInterval);
	},

	render: function () {
	    return (
	      <div className="commentBox">
	        <h1>Comments</h1>
	        <CommentList data={this.state.data} />
	        <CommentForm />
	      </div>
	    );
  	}
});

ReactDOM.render(
  <CommentBox url="/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);