var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

//calls all of the files here and renders to the html page
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="Timer" component={Timer}/>
			<Route path="Countdown" component={Countdown}/>
		</Route>
	</Router>,
	document.getElementById('app')
);		
