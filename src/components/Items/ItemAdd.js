import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { addItem } from '../../actions/itemActions';

/**
 * Component that contains the items form and is used to add Items to a shoppinglist
 * by a user
 */
class ItemAdd extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(name, quantity) {
    const { id } = this.props.match.params;
    this.props.addItem(id, name, quantity);
    this.props.history.push(`/shoppinglist/${id}`);
  }

  render() {
    const { addingItem } = this.props;
    const { id } = this.props.match.params;
    return (
      <div className="form-container">
        <ItemForm onSubmit={this.onSubmit} addingItem={addingItem} context="Add" shId={id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { addingItem } = state.items;
  return {
    addingItem,
  };
}

export const itemAddExports = {
  mapStateToProps,
  ItemAdd,
};

export default connect(mapStateToProps, { addItem })(ItemAdd);
