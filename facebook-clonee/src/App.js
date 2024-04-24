import React from 'react';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
import MainArea from './MainArea/MainArea';
function App() {
  return (
    <div className="App">
     <Switch>
      <Route path='/LoginPage' exact={true} component={LoginPage}/>
      <Route path='/HeaderArea'exact={true} component={HeaderArea}/>
      <Route path='/MainArea' exact={true} component={MainArea}/>
    </Switch>
    </div>
  );
}

export default App;
