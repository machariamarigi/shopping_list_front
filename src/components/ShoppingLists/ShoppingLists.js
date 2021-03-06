import React from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ModalDialog from '../UI/ModalDialog';

const style = {
  float: 'right',
};

const paginationStyle = {
  margin: 5,
};


/**
 * Method used to render all shopping lists that are created by a user
 * @param {Object} shoppinglists contains all the shoppinglists created by a user
 * @param {Function} clickShoppinglist called when a user clicks on a shoppionglist
 * @param {Boolean} deletingShoppinglist used for the execution of the asynchronous deleting of
 * shoppinglists
 * @param {Function} deleteModal called when a user clicks the delete shoppinglists button
 */
const renderShoppinglists = (
  shoppinglists,
  clickShoppinglist,
  deletingShoppinglist,
  deleteModal,
) =>
  // Use lodash to map through the shoppinglists object and generate a material ui card for all the
  // shoppinglists.
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

/**
 * Presentational component for all the shoppinglists created by a user
 * @param {Object} props constains all the properties passed on to the component passed
 * from the parrent
 */
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
    <FlatButton
      label="Delete"
      secondary
      onClick={event => deleteShoppinglist(currentModal.id, event)}
    />,
  ];
  return (
    <div>
      <ModalDialog
        context="Delete Shopping List"
        actions={actions}
        open={currentModal.isOpen}
        message={currentModal.message}
      />
      {renderShoppinglists(
        shoppinglists,
        clickShoppinglist,
        deletingShoppinglist,
        deleteModal,
      )}
      {hasPreviousPage ? (
        <RaisedButton onClick={event => onPreviousPage(event)} className="prev" style={paginationStyle}>
          Previous Page
        </RaisedButton>
      ) : (
        ''
      )}
      {hasNextPage ? (
        <RaisedButton onClick={event => onNextPage(event)} className="next" style={paginationStyle}>
          Next Page
        </RaisedButton>
      ) : (
        ''
      )}
    </div>
  );
};

export default ShoppingLists;
