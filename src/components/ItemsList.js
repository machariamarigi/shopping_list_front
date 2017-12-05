import React from 'react';
import _ from 'lodash';
import Chip from 'material-ui/Chip';
import { Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { blue300 } from 'material-ui/styles/colors';

const style = {
  float: 'right',
};

const renderItems = (items, buyItem) =>
  _.map(items, item => (
    <Card key={item.uuid} className={item.bought ? 'card bought-indication' : 'card'}>
      <CardText className={item.bought ? 'strike' : ''}>
        <p>Item: {item.name}</p>
        <p>Quantity: {item.quantity}</p>
      </CardText>
      <CardActions>
        <FlatButton label="Delete Shoppinglist" secondary style={style} />
        {item.bought ? (
          <div>
            <Chip backgroundColor={blue300}>Bought!</Chip>
          </div>
        ) : (
          <div>
            <FlatButton label="Bought?" primary onClick={e => buyItem(item.uuid, e)} />{' '}
            <FlatButton label="Edit Shoppinglist" />
          </div>
        )}
      </CardActions>
    </Card>
  ));

const ItemsList = (props) => {
  const { items, buyItem } = props;
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
      {renderItems(items, buyItem)}
    </div>
  );
};

export default ItemsList;
