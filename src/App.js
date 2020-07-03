import React from "react";
import "./App.style.scss";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/shop";
import LoginRegister from "./pages/login-register/login-register";
import { auth, createProfileDoc } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {

  unsubscribe = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createProfileDoc(userAuth);
        userReference.onSnapshot((snapShot) => {
          setCurrentUser({
            appUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sklep" component={Shop} />
          <Route
            exact
            path="/logowanie"
            render={() =>
            this.props.appUser ? (
            <Redirect to="/"/>
            ):(
            <LoginRegister/>
            )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  appUser: user.appUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
