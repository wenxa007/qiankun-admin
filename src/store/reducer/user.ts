import { AnyAction } from '@reduxjs/toolkit'
import { UserInfo } from '@/types/api'

export interface userActionType extends AnyAction {
  type: string;
  value: userStateType | string;
}

const initState = {
  username: '',
  account: '',
  avatar: ''
}

export type userStateType = UserInfo

const reducer = (state = initState, action: userActionType) => {
  switch (action.type) {
    case 'updateUsername':
      return { ...state, username: action.value as string }
    case 'setUserInfo':
      return { ...(action.value as userStateType) }
  }
  return state
}

export default reducer