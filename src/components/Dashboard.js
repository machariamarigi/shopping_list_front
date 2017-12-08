import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { fetchShoppinglists, deleteShoppinglist } from '../actions/shoppinglistActions';
import Search from './Search';
import ShoppingLists from './ShoppingLists';

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
  }

  componentDidMount() {
    this.props.fetchShoppinglists(1, null);
  }

  onDeleteClick = (id, e) => {
    e.preventDefault();
    this.props.deleteShoppinglist(id);
  };

  onNextPage(e) {
    e.preventDefault();
    const { nextPage } = this.props.pagination;
    this.props.fetchShoppinglists(nextPage, null);
  }

  onPreviousPage(e) {
    e.preventDefault();
    const { previousPage } = this.props.pagination;
    this.props.fetchShoppinglists(previousPage, null);
  }

  clickShoppinglist(id, e) {
    e.preventDefault();
    this.props.history.push(`/shoppinglist/${id}`);
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
    } = this.props;
    const searchShoppinglist = _.debounce(term => this.searchShoppinglist(term), 1000);

    if (gettingShoppinglists) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <div className="flex-container">
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
          />
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
});

export default connect(mapStateToProps, { fetchShoppinglists, deleteShoppinglist })(Dashboard);
