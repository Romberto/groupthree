import { LOCALFAVORITE } from "@/utils/constants";
import { addUser, isUserAuth, LogIn, logOut } from "@/utils/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserAuth = {
  auth: boolean;
  username: string | null;
};

type addUserType = {
  email: string;
  password: string;
};

const initialState: UserAuth = {
  auth: isUserAuth(),
  username: null
};

const AuthSlice = createSlice({
  name: "user/auth",
  initialState,
  reducers: {
    userRegisterAction: (state, action: PayloadAction<addUserType>) => {
      addUser(action.payload.email, action.payload.password);
      window.localStorage.setItem(LOCALFAVORITE, JSON.stringify({'favoritas': []}))
      state.auth = true;
    },
    userAuthenticatedAction: (state, action: PayloadAction<addUserType>) => {
      const login = LogIn(action.payload.email, action.payload.password);

      if (login) {
        state.auth = true;
      } else {
        console.error("Authentication failed");
      }
    },
    userLogOutAction: (state) => {
      logOut();
      state.auth = false;
    },
    isAuthAction: (state) => {
      state.auth = isUserAuth();
    },
  },
});
export const { userAuthenticatedAction, userLogOutAction, userRegisterAction, isAuthAction} =
  AuthSlice.actions;
export default AuthSlice.reducer;
