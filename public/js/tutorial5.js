import React from 'react';

var CommentForm = React.createClass({ 
    getInitialState: function() {
    	return {
    		author: '', 
    		text: ''
    	};
  	},

  	handleSubmit: function (e) {
  		e.preventDefault();

  		var author = this.state.author.trim(),
  			  text = this.state.text.trim();

  		if (!text || !author) {
  			return;
  		}

  		this.props.onCommentSubmit({author: author, text: text});
  		this.setState({author: '', text: ''});
  	},

  	handleAuthorChange: function(e) {
    	this.setState({author: e.target.value});
  	},

  	handleTextChange: function(e) {
    	this.setState({text: e.target.value});
  	},

  	render: function() {
    	return (
	      <form className="commentForm" onSubmit={this.handleSubmit}>
	        <input 
	        	type="text" 
	        	placeholder="Your name" 
	        	value={this.state.author}
	        	onChange={this.handleAuthorChange}
	        />
	        <input 
	        	type="text" 
	        	placeholder="Say something..." 
	        	value={this.state.text}
	        	onChange={this.handleTextChange}
	        />
	       	<input type="submit" value="Post" />
	      </form>
    	);
  	}
});

export {CommentForm};