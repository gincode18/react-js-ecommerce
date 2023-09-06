import React from "react";
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

function App() {
  return (
    <div className="app">
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
              <Header />

              <Home />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="app">
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
