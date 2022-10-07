import {
  SIGN_IN_USER,
  SHOW_ERROR,
  SHOW_LOADING,
  CLEAR_ERROR,
  HIDE_LOADING,
  GET_POSTS_DATA,
  LOG_OUT
} from './types'

export const Reducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS_DATA: {
      const { payload } = action;
      const usersObj = Object.fromEntries(payload[0].map( n => [n.id, n]))
      const albumObj = Object.fromEntries(payload[2].map( n => [n.albumId, n]))
      const newArr = payload[1].map(n => ({
        post: n,
        user: usersObj[n.userId],
        photo: albumObj[n.userId]
      }))
      return {
        ...state,
        data: newArr
      }
    }

    case SIGN_IN_USER: {
        const {payload} = action
        return {
          ...state,
          admin: payload
        }
    }
    case LOG_OUT: {
      return {
        ...state,
        admin: null
      }
    }
    case HIDE_LOADING: {
      return {
        ...state,
        loading: false
      }
    }
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case CLEAR_ERROR: {
      return {
        ...state,
        error: null
      }
    }
    case SHOW_ERROR: {
      const { error } = action
      return {
        ...state,
        error
      }
    }
    default:
      return state
  }
}