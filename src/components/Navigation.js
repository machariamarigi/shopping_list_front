import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';

class AppNav extends Component {
  render() {
    const unAuth = (
      <div>
        <FlatButton label="Login" />
        <FlatButton label="Register" />
      </div>
    );

    return <AppBar title="Shopping List App" iconElementRight={unAuth} />;
  }
}

export default AppNav
