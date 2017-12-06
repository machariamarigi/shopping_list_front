import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const AppNav = (props) => {
  const { user, authenticated } = props;
  const auth = (
    <IconMenu
      iconButtonElement={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Link to="/dashboard" href>
        <MenuItem primaryText="Dashboard" />
      </Link>
      <MenuItem primaryText="Log Out" />
    </IconMenu>
  );

  const unAuth = (
    <div>
      <Link to="/login" href>
        <FlatButton label="Login" />
      </Link>
      <Link to="/register" href>
        <FlatButton label="Register" />
      </Link>
    </div>
  );

  return (
    <AppBar
      title="Shopping List App"
      showMenuIconButton={false}
      iconElementRight={authenticated ? auth : unAuth}
    />
  );
};

export default AppNav;
