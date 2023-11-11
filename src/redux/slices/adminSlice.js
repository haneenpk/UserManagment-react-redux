import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        // admin-related state
        users: [],
    },
    reducers: {
        // admin-related reducers (e.g., addUser, deleteUser, searchUsers)
    },
});

// export admin actions and reducer
export const { addUser, deleteUser, searchUsers } = adminSlice.actions;
export const selectAdminUsers = (state) => state.admin.users;
export default adminSlice.reducer;
