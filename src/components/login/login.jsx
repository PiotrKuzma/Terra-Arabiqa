import React from 'react'

import './login.style.scss'
import Input from '../../components/input/input'
import UniButton from '../../components/uniButton/uniButton'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }


       
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState( {
            email: "",
            hasło: ""
        })
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState( {
            [name]: value
        })
    }

    render() {
        return(
            <div className="login">
                <h2 className="login__title">Posiadam konto</h2>
                <span className="login__span">Zaloguj się za pomocą email i hasła</span>
                <form className="form"
                onSubmit={this.handleSubmit}
                
                >
                    <Input className="form__input"
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    required
                    handleChange={this.handleChange}
                    
                    />

                    <label className="form__label">Email</label>
                    <Input className="form__input"
                    name="hasło" 
                    type ="password" 
                    value={this.state.hasło} 
                    required
                    handleChange={this.handleChange}
                    
                    
                    />

                    <label className="form__label">Hasło</label>

                    <UniButton className="unibutton" type="submit" >Zaloguj</UniButton>
                    <UniButton className="unibutton" onClick={signInWithGoogle} >Google</UniButton>
                    
                    
                    
                   
                
                </form>
            
            </div>

        )
    }
}

export default Login