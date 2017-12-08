import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { editItem, fetchItem } from '../actions/itemActions';

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
          Loading...{' '}
          <img
            alt="loading..."
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
          />
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
