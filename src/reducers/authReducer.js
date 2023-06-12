import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    iniciarSesion: (state, action) => {
      state.user = action.payload;
    },
    cerrarSesion: (state) => {
      state.user = null;
    },
  },
});

export const { iniciarSesion, cerrarSesion } = authSlice.actions;
export default authSlice.reducer;
