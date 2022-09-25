import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://image.photocnc.com/aoaodcom/png/netflix/netflix_PNG11.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
        <div className="loginScreen_body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <div>
              <div className="loginScreen_center">
                <h1>Unlimited films,TV programmes and more...</h1>
                <h3>Watch anywhere. Cannot at any time.</h3>
                <h4>
                  Ready to watch?Enter your email to creat or restart your
                  membership.
                </h4>
              </div>

              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
