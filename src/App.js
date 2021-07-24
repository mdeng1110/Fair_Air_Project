import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import AQI from './pages/aqi';
import Contact from './pages/contact';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/aqi' component={AQI} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;