import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;

const setDevice = createAction("SET_DEVICE");
const setmobileMenu = createAction("SET_MOBILE_MENU");
const setPage = createAction("SET_PAGE");

const deviceReducer = createReducer("Desktop", (builder) => {
  builder.addCase(setDevice, (state, action) => {
    return action.payload;
  });
});
const mobileMenuReducer = createReducer(false, (builder) => {
  builder.addCase(setmobileMenu, (state, action) => {
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
export function updateDevice(device: string) {
  store.dispatch({ type: "SET_DEVICE", payload: device });
}
export function updateMobileMenu(menu: boolean) {
  store.dispatch({ type: "SET_MOBILE_MENU", payload: menu });
}

export const getDevice = () => useSelector((state: RootState) => state.device);
export const getPage = () => useSelector((state: RootState) => state.page);
export const getMobileMenu = () => useSelector((state: RootState) => state.mobileMenu);

export const store = configureStore({
  reducer: {
    device: deviceReducer,
    page: pageReducer,
    mobileMenu: mobileMenuReducer
  }
});
