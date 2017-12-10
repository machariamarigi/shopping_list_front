import React from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const style = {
  float: 'right',
};

const paginationStyle = {
  margin: 5,
};

const renderShoppinglists = (
  shoppinglists,
  deleteShoppinglist,
  clickShoppinglist,
  deletingShoppinglist,
  deleteModal,
) =>
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
            onClick={event => deleteModal(event, shoppinglist.uuid)}
            style={style}
            disabled={deletingShoppinglist}
          />
          {deletingShoppinglist && (
            <img
              style={style}
              alt="loading..."
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
            />
          )}
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
    deletingShoppinglist,
    deleteModal,
    hideDeleteModal,
    currentModal,
  } = props;
  if (_.isEmpty(shoppinglists)) {
    return (
      <div>
        <p>No shoppinglists yet. Create one by clicking the + button</p>
      </div>
    );
  }

  const actions = [
    <FlatButton label="Cancel" onClick={event => hideDeleteModal(event)} />,
    <FlatButton label="Delete" secondary onClick={event => deleteShoppinglist(currentModal.shId, event)} />,
  ];
  return (
    <div>
      <Dialog title="Delete Shopping List" actions={actions} open={currentModal.isOpen}>
        {currentModal.message}
      </Dialog>
      {renderShoppinglists(
        shoppinglists,
        deleteShoppinglist,
        clickShoppinglist,
        deletingShoppinglist,
        deleteModal,
      )}
      {hasPreviousPage ? (
        <RaisedButton onClick={e => onPreviousPage(e)} style={paginationStyle}>
          Previous Page
        </RaisedButton>
      ) : (
        ''
      )}
      {hasNextPage ? (
        <RaisedButton onClick={e => onNextPage(e)} style={paginationStyle}>
          Next Page
        </RaisedButton>
      ) : (
        ''
      )}
    </div>
  );
};

export default ShoppingLists;
