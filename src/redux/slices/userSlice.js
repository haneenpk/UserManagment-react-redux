import { createSlice } from '@reduxjs/toolkit';
import { checkAuth } from '../../services/api';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        // user-related state
        isLoggedIn: false,
        username: null,
    },
    reducers: {
        // user-related reducers (e.g., setUser, editProfile, addProfilePic)

        // reducer to change the value of isLoggedIn
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
    },
});

export const { setLoggedIn, setUsername } = userSlice.actions;
export default userSlice.reducer;

// Asynchronous initialization function
export const initializeUser = () => async (dispatch) => {
    try {
        const response = await checkAuth();
        console.log("u", response);
        if (response && response.data.status === 'success' && response.data.role === 'user') {
            dispatch(setLoggedIn(true));
        } else {
            dispatch(setLoggedIn(false));
        }
    } catch (error) {
        // Handle error if the authentication check fails
        console.error('Authentication check failed:', error);
        dispatch(setLoggedIn(false));
    }
};
