import React from "react";
import Typewriter from 'typewriter-effect';
import ParticlesBg from "particles-bg";
import GoogleLogin from "react-google-login";
import "../styling/home.css"
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../feature/userHandle";

import "../styling/home.css"


const Landingpage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };


  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      <ParticlesBg type="cobweb" bg={true} />
      {!isSignedIn ? (
        <div className="login__message ">
          <h2>📰</h2>
          <h1 className="typewriter-text" >Coeus News Portal</h1>

          <Typewriter
            options={{

              strings: ['Online resource for searching & reading blogs. Signup and start reading!', '   Signin😋', '      ', 'Local News - News that matters to you', 'National News, Sports, Tech, Finance', 'Signin and explore!', 'Knowlegde is Power', '      '],

              autoStart: true,
              loop: true,
            }}
          />

          <GoogleLogin
            clientId="372908462482-gicrn8r4bg3t2j0fs9vt5av62agmvlq8.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Landingpage;
