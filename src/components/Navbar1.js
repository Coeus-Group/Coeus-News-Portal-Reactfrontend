import { Avatar } from "@material-ui/core";
import "../styling/navbar.css"
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../feature/userHandle";

const Navbar1 = () => {

    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    };


    return (
        <div className="navbar">
            <h1 className="navbar__header">Coeus News Portal 📰</h1>
            {isSignedIn && (
                <div className="blog__search">
                    <input
                        className="search"
                        placeholder="Search for a blog"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="submit" onClick={handleClick}>
                        Search
          </button>
                </div>
            )}

            {isSignedIn ? (
                <div className="navbar__user__data">
                    <Avatar
                        className="user"
                        src={userData?.imageUrl}
                        alt={userData?.name}
                    />
                    <h1 className="signedIn">{userData?.givenName}</h1>
                    <GoogleLogout
                        clientId="372908462482-gicrn8r4bg3t2j0fs9vt5av62agmvlq8.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="logout__button"
                            >
                                Logout 🚪
                            </button>
                        )}
                        onLogoutSuccess={logout}
                    />
                </div>
            ) : (
                <h1 className="notSignedIn">User unavailable 🔴 </h1>
            )}
        </div>
    );
};

export default Navbar1;
