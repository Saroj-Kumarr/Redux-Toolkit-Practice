import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
        state.splice(action.payload,1);
    },
    clearUsers(state, action) {
      return (state = []);
    },
  },
});

export const { addUser, removeUser, clearUsers } = usersSlice.actions;

export default usersSlice.reducer;
