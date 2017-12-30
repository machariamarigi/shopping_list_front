import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import { logout } from '../actions/authActions';
import '../styles/landing.css';
import AppNav from './UI/Navigation';
import ProtectedRoute from './Auth/ProtectedRoute';
import UnprotectedRoute from './Auth/UnprotectedRoute';
import Welcome from './UI/Welcome';
import RegistrationForm from './Auth/RegistrationForm';
import LoginForm from './Auth/LoginForm';
import Dashboard from './Dashboard';
import ShoppingListsAdd from './ShoppingLists/ShoppingListAdd';
import SingleShoppinglist from './SingleShoppinglist';
import ShoppingListEdit from './ShoppingLists/ShoppingListEdit';
import ItemAdd from './Items/ItemAdd';
import ItemEdit from './Items/ItemEdit';
import NotFound from './UI/NotFound';
import Loader from './UI/Loader';

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

  logoutUser = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(logout());
  };

  render() {
    const {
      alert, gettingUser, user, authenticated,
    } = this.props;

    if (gettingUser) {
      return <Loader segments="20" />;
    }

    return (
      <div>
        <AppNav user={user} authenticated={authenticated} logoutUser={this.logoutUser} />
        {alert.message && (
          <Snackbar
            open={this.state.open}
            message={alert.message}
            autoHideDuration={4000}
            onRequestClose={this.handleClose}
            style={{
              top: 0,
              bottom: 'auto',
              left: (window.innerWidth - 288) / 2,
              transform: alert.message ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',
            }}
          />
        )}
        <div className="container">
          <Switch>
            <Redirect from="/" exact to="/welcome" />
            <UnprotectedRoute exact path="/welcome" component={Welcome} />
            <UnprotectedRoute exact path="/login" component={LoginForm} />
            <UnprotectedRoute path="/register" component={RegistrationForm} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/shoppinglist/:id/add_item" component={ItemAdd} />
            <ProtectedRoute exact path="/shoppinglist/:shId/edit_item/:itId" component={ItemEdit} />
            <ProtectedRoute exact path="/shoppinglist/:id" component={SingleShoppinglist} />
            <ProtectedRoute exact path="/add_shoppinglist" component={ShoppingListsAdd} />
            <ProtectedRoute exact path="/edit_shoppinglist/:id" component={ShoppingListEdit} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    alert, gettingUser, user, auth,
  } = state;
  return {
    alert,
    gettingUser,
    user,
    authenticated: auth.authenticated,
  };
}

export default withRouter(connect(mapStateToProps)(landingPage));
