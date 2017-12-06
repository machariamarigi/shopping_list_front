import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const Welcome = () => (
  <Card>
    <CardMedia>
      <img src="https://shopping-list-flasky.herokuapp.com/static/img/shopping.jpg" alt="" />
    </CardMedia>
    <CardText>
      Welcome to The Amazing Shopping List. An application that helps you to manage your
      shoppinglist. Login and Register to use the App.
    </CardText>
    <CardActions>
      <RaisedButton label="Login" primary />
      <RaisedButton label="Register" secondary />
    </CardActions>
  </Card>
);

export default Welcome;
