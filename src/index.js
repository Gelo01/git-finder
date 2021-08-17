import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import User from './components/User';
import "../src/main.scss";
import About from './components/About';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/users/:id"component={User}/>  
        <Route exact path="/about"component={About}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));