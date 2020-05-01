import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [authAction, setAuthAction] = useState("LOGIN");
  const changeToLogin = () => setAuthAction("LOGIN");
  const changeToSignup = () => setAuthAction("SIGNUP");

  return (
    <>
      {authAction === "LOGIN" ? (
        <Login changeToSignup={changeToSignup} />
      ) : (
        <Signup changeToLogin={changeToLogin} />
      )}
    </>
  );
};

export default Auth;
