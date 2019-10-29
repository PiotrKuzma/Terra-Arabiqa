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
                <h2>Posiadam konto</h2>
                <span>Zaloguj za pomocą email i hasła</span>
                <form
                onSubmit={this.handleSubmit}
                
                >
                    <Input 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    required
                    handleChange={this.handleChange}
                    
                    />

                    <label>Email</label>
                    <Input 
                    name="hasło" 
                    type ="password" 
                    value={this.state.hasło} 
                    required
                    handleChange={this.handleChange}
                    
                    
                    />

                    <label>Hasło</label>

                    <UniButton type="submit" >Zaloguj</UniButton>
                    <UniButton onClick={signInWithGoogle} >Google</UniButton>
                    
                    
                    
                   
                
                </form>
            
            </div>

        )
    }
}

export default Login