// <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

import React from 'react'
import './header.style.scss'

import { Link } from 'react-router-dom'
import {ReactComponent as Logo } from '../../assets/coffee-maker.svg'
import {auth} from '../../firebase/firebase.utils'


const Header = ( {appUser}) => (
   
    
    <div className="header">
        <Link to="/" className="header__logo-container">
            <Logo className="logo"/>
        </Link>
        <h1 className="header__title">Terra Arabiqa</h1>
        

        <div className="header__navigation">
            <Link to="/sklep" className="header__navigation__link" >Sklep</Link>
            <Link to="/sklep" className="header__navigation__link">Kontakt</Link>
            {
                appUser ? (
                <div className="header__navigation__link logout"
                onClick={() => auth.signOut()}
                >
                Wyloguj
                </div> 
                ) : (
                <Link className="header__navigation__link" to="/logowanie">Zaloguj</Link>
                )
            }
        
        </div>

    
    </div>
    
)

export default Header