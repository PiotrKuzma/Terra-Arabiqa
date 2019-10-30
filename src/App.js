
import React from 'react';
import './App.style.scss'
import Header from './components/header/header'
import Home from './pages/home/Home'

import Shop from './pages/shop/shop'
import LoginRegister from './pages/login-register/login-register'
import {auth, createProfileDoc} from './firebase/firebase.utils'

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
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userReference = await createProfileDoc(userAuth)
        userReference.onSnapshot(snapShot => {
          this.setState({
            appUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }

      else {
        this.setState({
          appUser: userAuth
        })
      }

      
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