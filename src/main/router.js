import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from './home';
  import Login from './login';
  import Main from './main';


function Routing() {
  return (
    <Router>
    <span style={{float:'center',textAlign:'center'}}>
      <nav>
     <Link style={{textAlign:'center'}}>Logo</Link>
       <Link style={{padding:'10%'}} to="/">Home</Link>
       <Link to="/login">Login</Link>   
      </nav>
      <Switch>
      <Route path="/main">
          <Main/>
        </Route>
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </span>
  </Router>
  );
}


  
  

export default Routing;
