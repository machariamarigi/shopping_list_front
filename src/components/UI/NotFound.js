import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dispay error messages when user vists a wrong url
 */

const notFound = () => (
  <div className="error-page">
    <Card className="not-found">
      <CardHeader title="404" subtitle="Page Not Found :(" />
      <CardText>
        Maybe the page you are looking for has been removed, or you typed in the wrong URL
      </CardText>
      <CardActions>
        <FlatButton label="Go to homepage" primary href="/dashboard" />
      </CardActions>
    </Card>
  </div>
);

export default notFound;
