import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { fetchShoppinglists, deleteShoppinglist } from '../actions/shoppinglistActions';
import { showModal, hideModal } from '../actions/modalActions';
import Search from './UI/Search';
import ShoppingLists from './ShoppingLists/ShoppingLists';
import Loader from './UI/Loader';

const style = {
  marginRight: 20,
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.clickShoppinglist = this.clickShoppinglist.bind(this);
    this.onNextPage = this.onNextPage.bind(this);
    this.onPreviousPage = this.onPreviousPage.bind(this);
    this.searchShoppinglist = this.searchShoppinglist.bind(this);
    this.deleteModal = this.deleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchShoppinglists(1, null);
  }

  onDeleteClick = (id, event) => {
    this.props.deleteShoppinglist(id);
    this.hideDeleteModal(event);
  };

  onNextPage(event) {
    event.preventDefault();
    const { nextPage } = this.props.pagination;
    this.props.fetchShoppinglists(nextPage, null);
  }

  onPreviousPage(event) {
    event.preventDefault();
    const { previousPage } = this.props.pagination;
    this.props.fetchShoppinglists(previousPage, null);
  }

  clickShoppinglist(id, event) {
    event.preventDefault();
    this.props.history.push(`/shoppinglist/${id}`);
  }

  deleteModal(event, id) {
    event.preventDefault();
    this.props.showModal('Are you sure you want to delete this shoppinglist', id);
  }

  hideDeleteModal(event) {
    event.preventDefault();
    this.props.hideModal();
  }

  searchShoppinglist(event) {
    event.persist();
    const term = event.target.value;
    this.props.fetchShoppinglists(1, term);
  }

  render() {
    const {
      shoppinglists,
      gettingShoppinglists,
      pagination,
      user,
      deletingShoppinglist,
      modal,
    } = this.props;
    const searchShoppinglist = _.debounce(term => this.searchShoppinglist(term), 1000);

    if (gettingShoppinglists) {
      return (
        <Loader segments="20" />
      );
    }

    return (
      <div>
        <div className="flex-container">
          <div className="flex-content">
            <h2 className="flex-item">{user.username}'s Dashboard</h2>
            {_.isEmpty(shoppinglists) ? (
              ''
            ) : (
              <Search onSearchTermChange={searchShoppinglist} className="flex-item" />
            )}
            <ShoppingLists
              shoppinglists={shoppinglists}
              deleteShoppinglist={this.onDeleteClick}
              clickShoppinglist={this.clickShoppinglist}
              hasNextPage={pagination.hasNextPage}
              onNextPage={this.onNextPage}
              hasPreviousPage={pagination.hasPreviousPage}
              onPreviousPage={this.onPreviousPage}
              onSearchTermChange={searchShoppinglist}
              deletingShoppinglist={deletingShoppinglist}
              deleteModal={this.deleteModal}
              hideDeleteModal={this.hideDeleteModal}
              currentModal={modal}
            />
          </div>
          <Link to="/add_shoppinglist" href className="fab">
            <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shoppinglists: state.shoppinglists,
  gettingShoppinglists: state.gettingShoppinglists,
  user: state.user,
  pagination: state.shoppingPagination,
  deletingShoppinglist: state.deletingShoppinglist,
  modal: state.modals,
});

export default connect(mapStateToProps, {
  fetchShoppinglists,
  deleteShoppinglist,
  showModal,
  hideModal,
})(Dashboard);
