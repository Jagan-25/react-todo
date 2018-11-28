import React, { Component } from 'react';
import App from './App';
import './App.css';


class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
      logged:true 
		};
	}
	handleLogin(e){
    if(this.refs.uname.value && this.refs.upass.value === 'admin') {
      this.setState({logged:true});
    }
	}

    render() {
      if(!this.state.logged) {
        return ( 
        <div className="App">
            <div className="login">
              <h3>User Login</h3>
              <div>Username:</div>
              <div><input type="text" ref="uname"/></div>
              <div>Password:</div>
              <div><input type="password" ref="upass"/></div>
              <div><button onClick={this.handleLogin.bind(this)}>Login</button></div>        
            </div>
        </div>
      );
    } else {
      return (<App/>);
    }

  }
  }
export default Home;
