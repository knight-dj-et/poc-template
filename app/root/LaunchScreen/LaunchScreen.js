var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var AuthenticationRequired = require("../../shared").Authentication.AuthenticationRequired;

var LaunchScreen = AuthenticationRequired.requireAuth(React.createClass({
  render: function() {
    return (
      <div>
		<div className="col-md-8 col-md-offset-2 launcher text-center">
          <h1>POC Template</h1>
		</div>	
      </div>
    );
  }
//
}));


module.exports = LaunchScreen;
