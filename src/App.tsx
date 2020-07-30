import React from 'react';
import { Provider } from 'react-redux'
import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductListPage from './containers/ProductListPage';
import ProductDetailsPage from './containers/ProductDetailsPage';
import Menu from './components/Menu';
import UserCartPage from './containers/UserCartPage';
import ProductEditPage from './containers/ProductEditPage'
import store from './redux/store';
import ProductAddPage from './containers/ProductAddPage';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a01441',
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" >
              <Redirect
                to={{
                  pathname: "/products",
                }}
              />
            </Route>
            <Route exact path="/products" component={ProductListPage} />
            <Route exact path="/cart" component={UserCartPage} />
            <Route exact path="/products/new" component={ProductAddPage} />
            <Route exact path="/products/:id/edit" component={ProductEditPage} />
            <Route exact path="/products/:id" component={ProductDetailsPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
