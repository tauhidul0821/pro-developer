import { ActionReducerMap, createSelector } from "@ngrx/store";
// import { IUserReducerState, UserReducer } from "./user-reducer";
import * as fromUser from "./user-reducer";

export interface IRootReducerState{
    users: fromUser.IUserReducerState;
}

export const rootReducer: ActionReducerMap<IRootReducerState> = {
    users: fromUser.UserReducer
}

export const getUserState = (state: IRootReducerState) => state.users;


export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUsers = createSelector(getUserState, fromUser.getUsers);

