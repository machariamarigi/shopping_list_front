import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';

class AppNav extends Component {
  render() {
    const unAuth = (
      <div>
        <FlatButton label="Login" />
        <Link to="/register" href><FlatButton label="Register"></FlatButton></Link>
      </div>
    );

    return <AppBar title="Shopping List App" showMenuIconButton={false} iconElementRight={unAuth} />;
  }
}

export default AppNav
