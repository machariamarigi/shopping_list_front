import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import Landing from './components/Landing';


const App = () => (
  <Provider store={store()}>
    <BrowserRouter>
      <MuiThemeProvider>
        <Switch className="App">
          <Route path="/" component={Landing} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
