import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from './theme/GlobalStyle'
import Nav from './components/Nav/Nav'
import Base from './pages/base/Base';
import Login from './pages/login/Login';
import Order from './pages/order/Order'
import Register from './pages//register/Register';
import jwtDecode from 'jwt-decode'
import AuthRouter from './utils/AuthRoute';
import Axios from 'axios';
import Pane from './pages/pane/Pane';

Axios.defaults.baseURL = 'https://europe-west2-maskorder-adadd.cloudfunctions.net/api'

const token = localStorage.FBIdToken;
let authenticated;
if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    //window.location.href = '/login'
    authenticated = false;
  } else authenticated = true;
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav authenticated={authenticated}/>
        <Switch>
          <Route exact path='/' ><Base authenticated={authenticated}/></Route>
          <AuthRouter path='/login' component={Login} authenticated={authenticated}/>
          <Route path='/register' component={Register} />
          <AuthRouter path='/pane' component={Pane} authenticated={!authenticated}/>
          <AuthRouter path='/order' component={Order} authenticated={!authenticated}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
