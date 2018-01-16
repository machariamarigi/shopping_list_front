import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShoppinglistForm from './ShoppingListForm';
import { editShoppinglist, fetchShoppinglist } from '../../actions/shoppinglistActions';
import Loader from '../UI/Loader';

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
          <Loader segments="20" />
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

export const shoppingListEditExports = {
  mapStateToProps,
  ShoppingListEdit,
};

export default connect(mapStateToProps, { editShoppinglist, fetchShoppinglist })(ShoppingListEdit);
