import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { fetchShoppinglist } from '../actions/shoppinglistActions';
import { fetchItems, buyItem, deleteItem } from '../actions/itemActions';
import { showModal, hideModal } from '../actions/modalActions';
import ItemsList from './Items/ItemsList';
import Loader from './UI/Loader';

const style = {
  float: 'right',
};

class SingleShoppinglist extends Component {
  constructor(props) {
    super(props);

    this.onBoughtClick = this.onBoughtClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.deleteModal = this.deleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShoppinglist(id, (path) => {
      this.props.history.push(path);
    });
    this.props.fetchItems(id);
  }

  onBoughtClick(itId, event) {
    event.preventDefault();
    const shId = this.props.match.params.id;
    this.props.buyItem(shId, itId);
  }

  onDeleteClick = (itId, event) => {
    const shId = this.props.match.params.id;
    this.props.deleteItem(shId, itId);
    this.hideDeleteModal(event);
  };

  deleteModal(event, shId, itId) {
    event.preventDefault();
    this.props.showModal('Are you sure you want to delete this item', shId, itId);
  }

  hideDeleteModal(event) {
    event.preventDefault();
    this.props.hideModal();
  }

  render() {
    const {
      shoppinglist, items, modal, deletingItems,
    } = this.props;
    const { id } = this.props.match.params;
    if (!shoppinglist) {
      return <Loader segments="20" />;
    }
    return (
      <div className="flex-container">
        <div className="flex-content">
          <Link to="/dashboard" href>
            <RaisedButton className="flex-item" label="All Shopping lists" />
          </Link>
          <h2>Shopping List {shoppinglist.name}</h2>
          <ItemsList
            items={items}
            buyItem={this.onBoughtClick}
            deleteItem={this.onDeleteClick}
            shId={id}
            deleteModal={this.deleteModal}
            currentModal={modal}
            hideDeleteModal={this.hideDeleteModal}
            deletingItems={deletingItems}
          />
        </div>
        <Link to={`/shoppinglist/${id}/add_item`} href className="fab">
          <FloatingActionButton style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    );
  }
}

const mapStateToprops = (
  {
    shoppinglists, items, gettingItems, modals, deletingItems,
  },
  ownProps,
) => ({
  shoppinglist: shoppinglists[ownProps.match.params.id],
  items,
  gettingItems,
  deletingItems,
  modal: modals,
});

export default connect(mapStateToprops, {
  fetchShoppinglist,
  fetchItems,
  buyItem,
  deleteItem,
  showModal,
  hideModal,
})(SingleShoppinglist);
