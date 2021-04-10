import {createSlice} from "@reduxjs/toolkit";

const userHandle = createSlice({
    name : "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: "uk news",
        blogData: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state,isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state = userData = action.payload;
        },
        setInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload;
        },
    },

});