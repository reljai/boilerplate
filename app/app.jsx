var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load Foundation
$(document).foundation();

// app css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <p>Boilerplate 3</p>,
    document.getElementById('app')
);

/*
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
*/