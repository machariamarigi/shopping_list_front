import React from 'react';
import TextField from 'material-ui/TextField';

const Search = props => (
  <div>
    <TextField
      floatingLabelText="Search"
      onChange={(e) => {
        e.persist();
        props.onSearchTermChange(e);
      }}
    />
  </div>
);

export default Search;
