import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const renderShoppinglists = shoppinglists =>
  _.map(shoppinglists, shoppinglist => (
    <Link to={`shoppinglist/${shoppinglist.uuid}`} href>
      <Paper zDepth={5} rounded={false}>
        <Card>
          <CardHeader title={shoppinglist.name} />
          <CardActions>
            <FlatButton label="Add Items" primary />
            <FlatButton label="Edit Shoppinglist" />
            <FlatButton label="Delete Shoppinglist" secondary />
          </CardActions>
        </Card>
      </Paper>
    </Link>
  ));

const ShoppingLists = (props) => {
  const { shoppinglists } = props;
  return (
    <div>
      <Subheader>Shopping lists</Subheader>
      {renderShoppinglists(shoppinglists)}
    </div>
  );
};

export default ShoppingLists;
