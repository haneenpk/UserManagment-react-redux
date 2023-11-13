import { createSlice } from '@reduxjs/toolkit';
import { checkAuth } from '../../services/api';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        // admin-related state
        isLoggedIn: false,
    },
    reducers: {
        // admin-related reducers (e.g., addUser, deleteUser, searchUsers)

        // reducer to change the initial value of isLoggedIn
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
    },
});

// export admin actions and reducer
export const { setLoggedIn, setUsername } = adminSlice.actions;
export default adminSlice.reducer;

// Asynchronous initialization function
export const initializeAdmin = () => async (dispatch) => {
    try {
        const response = await checkAuth();
        console.log("a", response);
        if (response && response.data.status === 'success' && response.data.role === 'admin') {
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