import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from './components/Navbar';
import Home from './views/Home';
import People from './views/People';
import StarShips from './views/StarShips';
import Planets from './views/Planets';
import injectContext from './store/appContext';
import { Footer } from './components/Footer';

const App = ( ) => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/people/:id" element={<People />}/>
        <Route path="/detalis/starships/:id" element={<StarShips />}/>
        <Route path="/details/planets/:id" element={<Planets />}/>
        <Route path="*" element={<h1>Not found</h1>} />
      </ Routes>
      <Footer />
    </Router>
  </>
}



export default injectContext(App);
