import React from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  float: 'right',
};

const paginationStyle = {
  margin: 5,
};

const renderShoppinglists = (shoppinglists, deleteShoppinglist, clickShoppinglist) =>
  _.map(shoppinglists, shoppinglist => (
    <Paper zDepth={5} rounded={false} className="card">
      <Card key={shoppinglist.uuid}>
        <CardHeader
          title={shoppinglist.name}
          onClick={e => clickShoppinglist(shoppinglist.uuid, e)}
        />
        <CardActions>
          <FlatButton
            label="Add Items"
            primary
            href={`/shoppinglist/${shoppinglist.uuid}/add_item`}
          />
          <FlatButton label="Edit Shoppinglist" href={`/edit_shoppinglist/${shoppinglist.uuid}`} />
          <RaisedButton
            label="Delete Shoppinglist"
            secondary
            onClick={e => deleteShoppinglist(shoppinglist.uuid, e)}
            style={style}
          />
        </CardActions>
      </Card>
    </Paper>
  ));

const ShoppingLists = (props) => {
  const {
    shoppinglists,
    deleteShoppinglist,
    clickShoppinglist,
    hasNextPage,
    onNextPage,
    hasPreviousPage,
    onPreviousPage,
  } = props;
  if (_.isEmpty(shoppinglists)) {
    return (
      <div>
        <p>No shoppinglists yet. Create one by clicking the + button</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Shopping lists</h3>
      {renderShoppinglists(shoppinglists, deleteShoppinglist, clickShoppinglist)}
      {hasNextPage ? <RaisedButton onClick={e => onNextPage(e)} style={paginationStyle}>Next Page</RaisedButton> : ''}
      {hasPreviousPage ? <RaisedButton onClick={e => onPreviousPage(e)} style={paginationStyle}>Previous Page</RaisedButton> : ''}
    </div>
  );
};

export default ShoppingLists;
