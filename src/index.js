import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import User from './components/User';
import "../src/main.scss";
import AboutPage from './components/About';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/users/:id"component={User}/>  
        <Route exact path="/about"component={AboutPage}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));