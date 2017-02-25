import React from 'react'

class SignIn extends React.Component {

  constructor(props){
    super(props)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.signIn = this.signIn.bind(this)
    this.state = {
      email:"", 
      password:""
    }
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  signIn(event){
    event.preventDefault(); //stops default behaviour eg on a form submit the page might refresh, so this would stop that happening and go through our own code first.
    const request = new XMLHttpRequest();
    request.open('POST', this.props.url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.withCredentials = true;
    request.onload = () => {
      if (request.status === 201){
        const user = JSON.parse(request.responseText);
        this.props.onSignIn(user); //this happens AFTER we send the data variable below which takes the current state of this component and sends it as a user object...
      }
    }
        const data = {
          user: {
            email: this.state.email,
            password: this.state.password
          }
        }
      request.send(JSON.stringify(data))
  }
  
  render() {
    return (
      <form  className='login-form' >
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <button onClick={this.signIn}>  Sign In </button>
      </form>
    )
  }
}

export default SignIn