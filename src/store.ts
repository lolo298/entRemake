import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

//simple device "Desktop"| "Mobile" store

const setDevice = createAction("SET_DEVICE");

const setPage = createAction("SET_PAGE");

const deviceReducer = createReducer("Desktop", (builder) => {
  builder.addCase(setDevice, (state, action) => {
    return action.payload;
  });
});

const pageReducer = createReducer("Login", (builder) => {
  builder.addCase(setPage, (state, action) => {
    return action.payload;
  });
});

export function updateNav(page: string) {
  store.dispatch({ type: "SET_PAGE", payload: page });
}

export const store = configureStore({
  reducer: {
    device: deviceReducer,
    page: pageReducer
  }
});
