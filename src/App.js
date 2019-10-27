
import React from 'react';
import './App.style.scss'
import Home from './pages/home/Home'

import Shop from './pages/shop/shop'

import { Switch, Route } from 'react-router-dom'


function App () {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path ='/sklep' component ={Shop}/>
      </Switch>
    </div>

  )
}

export default App