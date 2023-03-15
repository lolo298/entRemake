import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
const persistedState = loadState();
export type RootState = ReturnType<typeof store.getState>;

const setDevice = createAction("SET_DEVICE");
const setmobileMenu = createAction("SET_MOBILE_MENU");
const setPage = createAction("SET_PAGE");
const setAnchorOrder = createAction("SET_ANCHOR_ORDER");
const editing = createAction("EDITING");

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
const anchorOrderReducer = createReducer(["emploiTmp", "message", "notes", "moodle"], (builder) => {
  builder.addCase(setAnchorOrder, (state, action) => {
    return action.payload;
  });
});
const editingReducer = createReducer(false, (builder) => {
  builder.addCase(editing, (state, action) => {
    return action.payload;
  });
});

export function updateNav(page: string) {
  store.dispatch({ type: "SET_PAGE", payload: page });
  saveState(store.getState());
}
export function updateDevice(device: string) {
  store.dispatch({ type: "SET_DEVICE", payload: device });
  saveState(store.getState());
}
export function updateMobileMenu(menu: boolean) {
  store.dispatch({ type: "SET_MOBILE_MENU", payload: menu });
  saveState(store.getState());
}
export function updateAnchorOrder(order: string[]) {
  store.dispatch({ type: "SET_ANCHOR_ORDER", payload: order });
  saveState(store.getState());
}
export function updateEditing(edit: boolean) {
  store.dispatch({ type: "EDITING", payload: edit });
  saveState(store.getState());
}

export const getDevice = () => useSelector((state: RootState) => state.device);
export const getPage = () => useSelector((state: RootState) => state.page);
export const getMobileMenu = () => useSelector((state: RootState) => state.mobileMenu);
export const getAnchorOrder = () => useSelector((state: RootState) => state.anchorOrder);
export const getEditing = () => useSelector((state: RootState) => state.editing);

export const store = configureStore({
  reducer: {
    device: deviceReducer,
    page: pageReducer,
    mobileMenu: mobileMenuReducer,
    anchorOrder: anchorOrderReducer,
    editing: editingReducer
  },
  preloadedState: persistedState
});
