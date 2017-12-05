import React from 'react';
import _ from 'lodash';
import Chip from 'material-ui/Chip';
import { Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { blue300 } from 'material-ui/styles/colors';

const style = {
  float: 'right',
};

const renderItems = (items, buyItem, deleteItem, shId) =>
  _.map(items, item => (
    <Card key={item.uuid} className={item.bought ? 'card bought-indication' : 'card'}>
      <CardText className={item.bought ? 'strike' : ''}>
        <p>Item: {item.name}</p>
        <p>Quantity: {parseFloat(item.quantity)}</p>
      </CardText>
      <CardActions>
        <FlatButton
          label="Delete Item"
          secondary
          style={style}
          onClick={e => deleteItem(item.uuid, e)}
        />
        {item.bought ? (
          <div>
            <Chip backgroundColor={blue300} onRequestDelete={e => buyItem(item.uuid, e)}>Bought!</Chip>
          </div>
        ) : (
          <div>
            <FlatButton label="Bought?" primary onClick={e => buyItem(item.uuid, e)} />{' '}
            <FlatButton label="Edit Item" href={`/shoppinglist/${shId}/edit_item/${item.uuid}`} />
          </div>
        )}
      </CardActions>
    </Card>
  ));

const ItemsList = (props) => {
  const { items, buyItem, deleteItem, shId } = props;
  if (_.isEmpty(items)) {
    return (
      <div>
        <p>Add items to Items to shopping list by clicking the + button</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Shopping list Items</h3>
      {renderItems(items, buyItem, deleteItem, shId)}
    </div>
  );
};

export default ItemsList;
