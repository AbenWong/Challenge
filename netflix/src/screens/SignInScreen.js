import React from "react";
import "./SignInScreen.css";
function SignInScreen() {
  const register = (e) => {
    e.prevenDefault();
  };
  // const signIn = (e) => {
  //   e.prevenDefault();
  // };
  const signIn = (e) => {
    e.prevenDefault();
  };
  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signinScreen_gray">New to Netflix?</span>
          <span className="signinScreen_link" onClick={register}>
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;