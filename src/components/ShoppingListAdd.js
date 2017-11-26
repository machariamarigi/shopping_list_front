import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShoppinglistForm from './ShoppinglistForm';
import { addShoppinglist } from '../actions/shoppinglistActions';


class ShoppingListAdd extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(name) {
    this.props.addShoppinglist(name, (path) => {
      this.props.history.push(path);
    });
  }

  render() {
    const { addingShoppinglist } = this.props;
    return (
      <div className="form-container">
        <ShoppinglistForm
          onSubmit={this.onSubmit}
          addingShoppinglist={addingShoppinglist}
          context="Add"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { addingShoppinglist } = state.shoppinglists;
  return {
    addingShoppinglist,
  };
}

export default connect(mapStateToProps, { addShoppinglist })(ShoppingListAdd);
