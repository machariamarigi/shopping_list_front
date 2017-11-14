import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import { alertActions } from '../actions/alertActions';
import AppNav from './Navigation';
import RegistrationForm from './RegistrationForm';

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { alert } = this.props;
    return (
      <div>
        <AppNav />
        {alert.message && (
          <Snackbar
            open={this.state.open}
            message={alert.message}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            style={{
              top: 0,
              bottom: 'auto',
              left: (window.innerWidth - 288) / 2,
              transform: alert.message
                ? 'translate3d(0, 0, 0)'
                : 'translate3d(0, -50px, 0)',
            }}
          />
        )}
        <Switch>
          <Route path="/register" component={RegistrationForm} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

export default connect(mapStateToProps)(landingPage);
