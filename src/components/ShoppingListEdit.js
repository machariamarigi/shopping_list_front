import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/authForm.css';
import ShoppinglistForm from './ShoppinglistForm';
import { editShoppinglist, fetchShoppinglist } from '../actions/shoppinglistActions';

class ShoppingListEdit extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShoppinglist(id);
  }

  onSubmit(name) {
    const { id } = this.props.match.params;
    this.props.editShoppinglist(id, name, (path) => {
      this.props.history.push(path);
    });
  }

  render() {
    const { editingShoppinglist, shoppinglist } = this.props;
    if (!shoppinglist) {
      return (
        <div>
          Loading...{' '}
          <img
            alt="loading..."
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
          />
        </div>
      );
    }
    const { name } = shoppinglist;

    return (
      <div className="form-container">
        <ShoppinglistForm
          initialValues={{ name }}
          onSubmit={this.onSubmit}
          editingShoppinglist={editingShoppinglist}
          context="Edit"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ shoppinglists, editingShoppinglist }, ownProps) => ({
  editingShoppinglist,
  shoppinglist: shoppinglists[ownProps.match.params.id],
});

export default connect(mapStateToProps, { editShoppinglist, fetchShoppinglist })(ShoppingListEdit);
