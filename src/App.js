
import React from 'react';
import './App.style.scss'
import Header from './components/header/header'
import Home from './pages/home/Home'

import Shop from './pages/shop/shop'
import LoginRegister from './pages/login-register/login-register'

import { Switch, Route } from 'react-router-dom'


function App () {
  return(
    <div className="wrapper">
      <Header />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path ='/sklep' component ={Shop}/>
      <Route path ='/logowanie' component ={LoginRegister}/>
      </Switch>
    </div>

  )
}

export default App