var React = require("react");

var auth = require("./auth");

class Logout extends React.Component {
  componentDidMount () {
    auth.logout();
  }

  render () {
    return <p>You are now logged out</p>;
  }
}


module.exports = Logout;