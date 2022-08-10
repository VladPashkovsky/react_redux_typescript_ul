export interface UserState {
  users: any[],
  loading: boolean,
  error: null | string
}

export enum UserActionType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface fetchUserAction {
  type: UserActionType.FETCH_USERS
}

interface fetchUsersActionSuccess {
  type: UserActionType.FETCH_USERS_SUCCESS,
  payload: any[]
}

interface fetchUsersActionError {
  type: UserActionType.FETCH_USERS_ERROR,
  payload: string
}

export type UserAction = fetchUserAction | fetchUsersActionSuccess | fetchUsersActionError