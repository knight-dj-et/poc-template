var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

var App = require('./App');
var LogIn = require('./shared').Authentication.LogIn;
var Logout = require('./shared').Authentication.Logout;
var LaunchScreen = require('./root/LaunchScreen/LaunchScreen');

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="launch-screen" handler={LaunchScreen}/>
	<Route name="log-in" handler={LogIn} />
    <Route name="log-out" handler={Logout} />

  </Route>
);

module.exports = routes;
