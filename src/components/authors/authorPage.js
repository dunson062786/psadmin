"use strict";

var React = require('react');
var authorApi = require('../../api/authorApi');

var Authors = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Authors</h1>
			</div>
		);
	}
});

module.exports = Authors;