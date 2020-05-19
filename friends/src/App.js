import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom' 
import {Login} from './components/Login';

function App() {
  return (
    <Router>
    <div className="main">



    <Login />



    </div>
    </Router>
  );
}

export default App;
