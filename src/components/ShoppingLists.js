import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
          <FlatButton
            label="Delete Shoppinglist"
            secondary
            onClick={e => deleteShoppinglist(shoppinglist.uuid, e)}
          />
        </CardActions>
      </Card>
    </Paper>
  ));

const ShoppingLists = (props) => {
  const { shoppinglists, deleteShoppinglist, clickShoppinglist } = props;
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
    </div>
  );
};

export default ShoppingLists;
