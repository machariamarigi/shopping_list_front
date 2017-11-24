import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const renderShoppinglists = props =>
  _.map(props.shoppinglists, shoppinglist => (
    <TableRow key={shoppinglist.uuid}>
      <TableRowColumn>
        <Link to={`shoppinglist/${shoppinglist.uuid}`} href>
          {shoppinglist.name}
        </Link>
      </TableRowColumn>
      <TableRowColumn>
        <RaisedButton label="Add Items" primary style={style} />
        <Link to={`edit_shoppinglist/${shoppinglist.uuid}`} href>
          <RaisedButton label="Edit Shopping List Name" style={style} />
        </Link>
        <RaisedButton
          label="Delete Shopping List"
          secondary
          style={style}
          onClick={e => props.deleteShoppinglist(shoppinglist.uuid, e)}
        />
      </TableRowColumn>
    </TableRow>
  ));

const ShoppingLists = props => (
  <Table>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Shopping List Name</TableHeaderColumn>
        <TableHeaderColumn>Actions</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>{renderShoppinglists(props)}</TableBody>
  </Table>
);

export default ShoppingLists;
