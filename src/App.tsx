import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductList from './views/ProductList';
import ProductDetails from './views/ProductDetails';
import Menu from './components/Menu';
import UserCart from './views/UserCart';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a01441',
    }
  }
})


function App() {
  return (
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
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/cart" component={UserCart} />
            <Route exact path="/products/:id" component={ProductDetails} />
          </Switch>
        </Router>
      </ThemeProvider>
  );
}

export default App;
