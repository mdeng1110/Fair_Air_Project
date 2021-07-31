import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import AQI from './pages/aqi';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/aqi' component={AQI} />
        <Route path='/login' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;