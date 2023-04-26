import React from 'react'
import { Route } from 'react-router-dom';
import './Style/App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { Routes } from 'react-router-dom';
import Checkout from './Component/Checkout';

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
