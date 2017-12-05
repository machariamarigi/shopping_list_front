import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const renderShoppinglists = (shoppinglists, deleteShoppinglist) =>
  _.map(shoppinglists, shoppinglist => (
    <Link to={`shoppinglist/${shoppinglist.uuid}`} href>
      <Paper zDepth={5} rounded={false} className="card">
        <Card key={shoppinglist.uuid}>
          <CardHeader title={shoppinglist.name} />
          <CardActions>
            <FlatButton label="Add Items" primary />
            <Link to={`edit_shoppinglist/${shoppinglist.uuid}`} href>
              <FlatButton label="Edit Shoppinglist" />
            </Link>
            <FlatButton
              label="Delete Shoppinglist"
              secondary
              onClick={e => deleteShoppinglist(shoppinglist.uuid, e)}
            />
          </CardActions>
        </Card>
      </Paper>
    </Link>
  ));

const ShoppingLists = (props) => {
  const { shoppinglists, deleteShoppinglist } = props;
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
      {renderShoppinglists(shoppinglists, deleteShoppinglist)}
    </div>
  );
};

export default ShoppingLists;
