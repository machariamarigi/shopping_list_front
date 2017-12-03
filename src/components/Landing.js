import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import alertActions from '../actions/alertActions';
import '../styles/landing.css';
import AppNav from './Navigation';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import ShoppingListsAdd from './ShoppingListAdd';
import SingleShoppinglist from './SingleShoppinglist';
import ShoppingListEdit from './ShoppingListEdit';
import ItemAdd from './ItemAdd';
import ItemEdit from './ItemEdit';
import NotFound from './NotFound';

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };

    const { dispatch } = this.props;
    this.props.history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { alert, getUser } = this.props;

    if (getUser.gettingUser) {
      return <div>Loading ... </div>;
    }

    return (
      <div>
        <AppNav user={getUser} />
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
              transform: alert.message ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',
            }}
          />
        )}
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/shoppinglist/:id/add_item" component={ItemAdd} />
            <Route path="/shoppinglist/:shId/edit_item/:itId" component={ItemEdit} />
            <Route path="/shoppinglist/:id" component={SingleShoppinglist} />
            <Route path="/add_shoppinglist" component={ShoppingListsAdd} />
            <Route path="/edit_shoppinglist/:id" component={ShoppingListEdit} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert, getUser } = state;
  return {
    alert,
    getUser,
  };
}

export default connect(mapStateToProps)(landingPage);
