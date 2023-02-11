import { createSelector } from "reselect";
import { RootState } from "../store";

export const user = (state: RootState) => state.user;

export const selectLoggedIn = createSelector(user, (user) => user.loggedIn);

export const selectUserImage = createSelector(user, (user) => user.picture);
