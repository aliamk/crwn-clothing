import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
// import CollectionItem from './components/collection-item/collection-item.component'


// const HatsPage = () => (
//   <div>
//     <h1>HAT'S PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/shop' component={ ShopPage } />
        {/* <Route exact path='/collection-item' component={ CollectionItem } /> */}

      </Switch>
    </div>
  );
}

export default App;
