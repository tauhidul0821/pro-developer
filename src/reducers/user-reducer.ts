import { state } from "@angular/animations";
import { IUsers } from "@app/models/users.model";
import { USER_LIST_REQUEST, USER_LIST_SUCCESS } from "src/actions/user-action";
import {Action} from '../actions'

export interface IUserReducerState {
    loading: boolean;
    loaded: boolean;
    users: IUsers[];
}

const initialState: IUserReducerState = {
    loading: false,
    loaded: false,
    users: []
}

export function UserReducer(state = initialState, action: Action): IUserReducerState{
    switch (action.type) {
        case USER_LIST_REQUEST: {
            return {...state, loading: true}
        }
        case USER_LIST_SUCCESS: {
            const data = action.payload.data;
            return {...state, loading: false, loaded: true, users: data}
        }
        default: {
            return state
        }
    }

}

// 
export const getLoading = (state: IUserReducerState) => state.loading;
export const getLoaded = (state: IUserReducerState) => state.loaded;
export const getUsers = (state: IUserReducerState) => state.users;

 