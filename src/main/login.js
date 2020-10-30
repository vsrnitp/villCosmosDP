
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Login extends React.Component {
  state = {
    userName: '',
    password:'',
    loginData:'',
    failedLogin:'',
    active:false,
    failedActive:false,
   
  }

  handleUsenameChange = event => {
    this.setState({ userName: event.target.value});
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    // eslint-disable-next-line 
    const user = {
      userName: this.state.userName,
      password:this.state.password
    };

    axios.post(`https://villCosmos-1.vsrnitp.repl.co/api/dp/deliveryAgentLogin/deliveryAgentLogin`, { userName:this.state.userName,password:this.state.password})
      .then(res => {
        if(res.data.name)
        this.setState({loginData:res.data.name,active:true});
        else
        this.setState({failedLogin:'Invalid Credentials!',failedActive:true});
      }).catch((err)=>{console.log(err)
      })
  }

  render() {
    return (
      <div className="container">
      <div style={{padding:'5%',textAlign:'center'}}>Login Here</div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" name="userName" placeholder="Username" onChange={this.handleUsenameChange} />
          </div>
          <div className="form-group">
          <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-outline-success" style={{fontWeight:'bolder'}}>Login</button>
        </form>
        {this.state.active &&
        <div>
        <Link style={{padding:'20%',color:'green',fontWeight:'bolder'}} to="/">{this.state.loginData} successfully Logged in! Link to your personalized portal!</Link>
        </div>
        }
        {this.state.failedActive &&
          <div>
          <Link style={{padding:'20%',color:'red',fontWeight:'bolder'}} to="/">{this.state.failedLogin}</Link>
          </div>
          }
       
      </div>
    )
  }
}