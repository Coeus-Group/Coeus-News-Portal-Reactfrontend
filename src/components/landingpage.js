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
        <ParticlesBg type="random" bg={true}/>
      {!isSignedIn ? (
        <div className="login__message ">
          <h2>📰</h2>
                <h1 className="typewriter-text" >Coues News Portal</h1>
                <p>Online resource for reading blogs. Signup and start reading!</p>

 
              <Typewriter
                options={{
                  strings: ['Coues News', 'Portal'],
                  strings: ['Online resource for reading blogs. Signup and start reading', 'Signin😋'],
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
