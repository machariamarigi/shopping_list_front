import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchShoppinglist } from '../actions/shoppinglistActions';
import { fetchItems, buyItem, deleteItem } from '../actions/itemActions';
import ItemsList from './ItemsList';

class SingleShoppinglist extends Component {
  constructor(props) {
    super(props);

    this.onBoughtClick = this.onBoughtClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShoppinglist(id);
    this.props.fetchItems(id);
  }

  onBoughtClick(itId, e) {
    e.preventDefault();
    const shId = this.props.match.params.id;
    this.props.buyItem(shId, itId);
  }

  onDeleteClick = (itId, e) => {
    e.preventDefault();
    const shId = this.props.match.params.id;
    this.props.deleteItem(shId, itId);
  };

  render() {
    const { shoppinglist, items } = this.props;
    const { id } = this.props.match.params;
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
    return (
      <div className="content">
        <RaisedButton className="flex-item" secondary label="Delete Shopping list" />
        <RaisedButton className="flex-item" label="All Shopping lists" />
        <h2>Shopping List {shoppinglist.name}</h2>
        <ItemsList items={items} buyItem={this.onBoughtClick} deleteItem={this.onDeleteClick} />
      </div>
    );
  }
}

const mapStateToprops = ({ shoppinglists, items }, ownProps) => ({
  shoppinglist: shoppinglists[ownProps.match.params.id],
  items,
});

export default connect(mapStateToprops, {
  fetchShoppinglist, fetchItems, buyItem, deleteItem,
})(SingleShoppinglist);
