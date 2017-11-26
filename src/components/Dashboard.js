import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { fetchShoppinglists, deleteShoppinglist } from '../actions/shoppinglistActions';
import ShoppingLists from './ShoppingLists';

const style = {
  marginRight: 20,
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchShoppinglists();
  }

  onDeleteClick = (id, e) => {
    e.preventDefault();
    this.props.deleteShoppinglist(id);
  };

  render() {
    const { shoppinglists } = this.props;
    const { user } = this.props;
    return (
      <div>
        <h2 className="flex-item">{user.username}'s Dashboard</h2>
        <div className="flex-container">
          <ShoppingLists shoppinglists={shoppinglists} deleteShoppinglist={this.onDeleteClick} />
          <Link to="/add_shoppinglist" href>
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
  user: state.getUser.user,
});

export default connect(mapStateToProps, { fetchShoppinglists, deleteShoppinglist })(Dashboard);
