import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/coffee-maker.svg";
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';

const Header = ({ appUser, hidden }) => (
  <div className="header">
    <Link to="/" className="header__logo-container">
      <Logo className="logo" />
    </Link>
    <h1 className="header__title">Terra Arabiqa</h1>
    <div className="header__navigation">
      <Link to="/sklep" className="header__navigation__link">
        Sklep
      </Link>
      <Link to="/sklep" className="header__navigation__link">
        Kontakt
      </Link>
      {appUser ? (
        <div
          className="header__navigation__link logout"
          onClick={() => auth.signOut()}
        >
          Wyloguj
        </div>
      ) : (
        <Link className="header__navigation__link" to="/logowanie">
          Zaloguj
        </Link>
      )}
      <CartIcon/>
    </div>
    { hidden? null : <CartDropdown/> }
  </div>
);

const mapStateToProps = ({user: {appUser}, cart: {hidden}}) => ({
  appUser,
  hidden
})

export default connect(mapStateToProps)(Header);
