import React, { useState, useEffect } from 'react';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/Header';
// import HeaderUser from './components/layouts/Header_User';
import Index from './components/Index';
import SignIn from './components/Signin_formik';
import SignUp from './components/NewSignup';
import Dashboard from './components/Dashboard';
import Create from './components/Create';

const secureAuth = (Component) => () => { 
  return localStorage.getItem('auth-token') ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  )
} 

function App() {
  const [ data, setData ] = useState(null);

  const appAuth = async () => {
    let myJsonToken = localStorage.getItem("auth-token");
    let bearer = 'Bearer ' + myJsonToken;
    let requestOptions = {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
            'authorization': bearer,
            'Content-Type': 'application/json'
        })
    }
    let response = await fetch('http://localhost:7000/app/getUser', requestOptions)
    const json = await response.json();
    setData(json.username);
  }

  useEffect(()=> {
    appAuth();
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        
        <Header username={data} />
        
        <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/dashboard' render={secureAuth(Dashboard)} />
            <Route path='/create'  render={secureAuth(Create)} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
