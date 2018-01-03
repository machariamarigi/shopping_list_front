import React from 'react';
import TextField from 'material-ui/TextField';

/**
 * UI component for the search textfield
 */

const Search = props => (
  <div>
    <TextField
      floatingLabelText="Search"
      onChange={(event) => {
        event.persist();
        props.onSearchTermChange(event);
      }}
    />
  </div>
);

export default Search;
