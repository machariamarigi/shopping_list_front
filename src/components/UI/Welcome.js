import React from 'react';
import { Card, CardMedia } from 'material-ui/Card';

/**
 * Welcome message to be shown when a user first loads the app
 */

const Welcome = () => (
  <Card>
    <CardMedia>
      <img
        src="https://www.buzzfeed.com/static-assets/img/shopping_header.bd16ddeece64859c9f790c30a332a0ed.png"
        alt=""
      />
    </CardMedia>
  </Card>
);

export default Welcome;
