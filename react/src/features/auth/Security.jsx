import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
function Security({ children }) {
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    console.log(users);
  } );
  if (users.length === 0) {
    return <Navigate to="/login"></Navigate>;
  }
  return  children ;
}

export default Security;
