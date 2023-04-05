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

const userObjSlice = createSlice({
  name: 'userObj',
  initialState: { userObj: null },
  reducers: {
    setUserObj: (state, action) => {
      state.userObj = action.payload;
    },
  },
});


const store = configureStore({
  reducer: {
    userEmail: userSlice.reducer,
    userObj: userObjSlice.reducer
  },
});

export const { setUserEmail } = userSlice.actions;
export const { setUserObj } = userObjSlice.actions;


export default store;
