import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { addItem } from '../actions/itemActions';


class ItemAdd extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(name, quantity) {
    const { id } = this.props.match.params;
    this.props.addItem(id, name, quantity, () => {
      this.props.history.push(`/shoppinglist/${id}`);
    });
  }

  render() {
    const { addingItem } = this.props;
    return (
      <div className="form-container">
        <ItemForm
          onSubmit={this.onSubmit}
          addingItem={addingItem}
          context="Add"
        />
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

export default connect(mapStateToProps, { addItem })(ItemAdd);
