import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <div className="app">
     <Routes>
     <Route path="/checkout" element={<div className='app'><Header/><Checkout></Checkout></div>}></Route>
      
      <Route path="/" element={ <div className="app">
      <Header/>
      <Home/>
      </div>}/>
      
      
      </Routes>
    </div>
    
  );
}

export default App;
