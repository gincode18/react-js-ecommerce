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
import ThemeChanger from "./Component/ThemeChanger";
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
  }, [theme]);
  return (
    <div data-theme={theme} className="app bg-base-300 ease-out duration-700">
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
              <label
                className="swap swap-rotate  z-50 right-3 top-24 fixed rounded-lg bg-black pr-10 opacity-75"
                onClick={() => {
                  const randomNumber = Math.floor(Math.random() * 27) + 1;
                  console.log(randomNumber);
                  settheme(themes[randomNumber]);
                }}
              >
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className=" hidden" />

                {/* sun icon */}
                <ThemeChanger></ThemeChanger>
              </label>
              <Home></Home>
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
        <Route
          path="/test2"
          element={
            <div className="app">
              <ThemeChanger></ThemeChanger>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
