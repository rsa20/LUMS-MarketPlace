import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userEmail',
  initialState: { userEmail: '' },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});


const store = configureStore({
  reducer: {
    userEmail: userSlice.reducer,
  },
});

export const { setUserEmail } = userSlice.actions;

export default store;
