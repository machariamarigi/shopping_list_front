import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const renderItems = items =>
  _.map(items, item => (
    <Link to={`shoppinglist/${item.uuid}`} href>
      <Card key={item.uuid}>
        <CardHeader title={item.name} />
        <CardActions>
          <FlatButton label="Bought?" primary />
          <FlatButton label="Edit Shoppinglist" />
          <FlatButton label="Delete Shoppinglist" secondary />
        </CardActions>
      </Card>
    </Link>
  ));

const ItemsList = (props) => {
  const { items } = props;
  if (_.isEmpty(items)) {
    return (
      <div>
        <p>Add items to Shopping list by clicking the + button</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Shopping lists</h3>
      {renderItems(items)}
    </div>
  );
};

export default ItemsList;
