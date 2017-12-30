import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { editItem, fetchItem } from '../../actions/itemActions';
import Loader from '../UI/Loader';

class ItemEdit extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { shId, itId } = this.props.match.params;
    this.props.fetchItem(shId, itId);
  }

  onSubmit(name, quantity) {
    const { shId, itId } = this.props.match.params;
    this.props.editItem(shId, itId, name, quantity);
    this.props.history.push(`/shoppinglist/${shId}`);
  }

  render() {
    const { editingItem, item } = this.props;
    const { shId } = this.props.match.params;
    if (!item) {
      return (
        <div>
          <Loader segments="20" />
        </div>
      );
    }
    const { name } = item;
    const quantity = parseFloat(item.quantity);
    return (
      <div className="form-container">
        <ItemForm
          initialValues={{ name, quantity }}
          onSubmit={this.onSubmit}
          editingItem={editingItem}
          context="Edit"
          shId={shId}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ items, editingItem }, ownProps) => ({
  editingItem,
  item: items[ownProps.match.params.itId],
});

export default connect(mapStateToProps, { editItem, fetchItem })(ItemEdit);
