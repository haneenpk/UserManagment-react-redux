import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        // user-related state
    },
    reducers: {
        // user-related reducers (e.g., setUser, editProfile, addProfilePic)
    },
});

// export user actions and reducer
export const { setUser, editProfile, addProfilePic } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
