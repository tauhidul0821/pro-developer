import { IUsers } from "@models/users.model";

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';

export class UserListRequestAction {
    readonly type = USER_LIST_REQUEST;
}


export class UserListSuccessAction {
    readonly type = USER_LIST_SUCCESS;
    // payload:  = {};

    constructor(public payload:any){
        // this.payload = payload;

    }
}
