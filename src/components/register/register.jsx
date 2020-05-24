import React from "react";
import "./register.style.scss";
import Input from "../input/input";
import UniButton from "../uniButton/uniButton";
import { auth, createProfileDoc } from "../../firebase/firebase.utils";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, passwordConfirm } = this.state;
    if (password != passwordConfirm) {
      alert("Hasła nie zgadzają się.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createProfileDoc(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, passwordConfirm } = this.state;
    return (
      <div className="register">
        <h2 className="register__title">Nie posiadam konta</h2>
        <span className="register__span">Utwórz nowe konto</span>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form__label">Użytownik</label>
          <Input
            className="form__input"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
          ></Input>
          <label className="form__label">Adres Email</label>
          <Input
            className="form__input"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          ></Input>
          <label className="form__label">Hasło</label>
          <Input
            className="form__input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          ></Input>
          <label className="form__label">Potwierdź hasło</label>
          <Input
            className="form__input"
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={this.handleChange}
            required
          ></Input>
          <UniButton className="unibutton" type="submit">
            Zarejestruj
          </UniButton>
        </form>
      </div>
    );
  }
}

export default Register;
