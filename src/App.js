
import React from 'react';
import './App.style.scss'
import Header from './components/header/header'
import Home from './pages/home/Home'

import Shop from './pages/shop/shop'
import LoginRegister from './pages/login-register/login-register'
import {auth} from './firebase/firebase.utils'

import { Switch, Route } from 'react-router-dom'



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      appUser: null
    }
  }

  unsubscribe = null

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      this.setState({appUser: user})

      
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }


  render() {
    return(
      <div className="wrapper">
        <Header appUser ={this.state.appUser}/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path ='/sklep' component ={Shop}/>
        <Route path ='/logowanie' component ={LoginRegister}/>
        </Switch>
      </div>
  
    )
  }
}

export default App