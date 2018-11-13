/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars for bootstrap.

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<RouteHandler/>
			</div>
		);
	}
});


module.exports = App;