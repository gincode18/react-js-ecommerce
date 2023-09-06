import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./Style/App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { Routes } from "react-router-dom";
import Checkout from "./Component/Checkout";
import { Space, Alert } from "antd";
import Login from "./Component/Login";
import ProductsList from "./features/product-list/ProductsList";
import Navbar from "./features/navbar/Navbar";
import ProductFilter from "./features/ProductFilter/ProductFilter";
import SignUP from "./Component/SignUp";
import Cart from "./features/cart/Cart";
const onClose = (e) => {
  console.log(e, "I was closed.");
};
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

function App() {
  const [theme, settheme] = useState(themes[20]);
  useEffect(() => {
    console.log(theme);
  },[theme]);
  return (
    <div data-theme={theme} className="app bg-base-300">
      <Routes>
        <Route
          path="/checkout"
          element={
            <div className="app">
              <Header />
              <Checkout></Checkout>
            </div>
          }
        ></Route>

        <Route
          path="/"
          element={
            <div className="app">
              <Navbar></Navbar>
              <label className="swap swap-rotate  z-50 right-3 top-24 fixed rounded-lg bg-black pr-10 opacity-75"
                onClick={() => {
                  const randomNumber = Math.floor(Math.random() * 27) + 1;
                  console.log(randomNumber);
                  settheme(themes[randomNumber]);
                }}>
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className=" hidden"  />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10  text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
              <Home />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="app bg-neutral">
              <Login></Login>
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="app">
              <SignUP></SignUP>
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="app">
              <Cart></Cart>
            </div>
          }
        />
        <Route
          path="/test"
          element={
            <div className="app">
              <Navbar>
                <ProductFilter>
                  <ProductsList></ProductsList>
                </ProductFilter>
              </Navbar>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;
