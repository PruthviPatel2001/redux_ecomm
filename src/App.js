import "./styles.css";
import React from 'react'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Header from "./container/Header"
import ProductListing from './container/ProductListing'
import  ProductComponent from './container/ProductComponent'
import ProductDetails from './container/ProductDetails'

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Switch>

          <Route path="/" exact >
            <ProductListing/>
          </Route>

          <Route path="/product/:productId" exact >
            <ProductDetails/>
          </Route>

          <Route>
            404 not found
          </Route>
        
        </Switch>
      </Router>

    </div>
  )
}

export default App

