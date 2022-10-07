import React, { useReducer } from "react";
import { Context } from "./context";
import { Reducer } from "./reducer";
import { getDataLoad } from "../htpp";
import axios from "axios";
import {
  SHOW_LOADING,
  SHOW_ERROR,
  HIDE_LOADING,
  CLEAR_ERROR,
  GET_POSTS_DATA,
  SIGN_IN_USER,
  LOG_OUT
} from './types'

const defaultState = {
  data: [],
  loading: false,
  error: null,
  admins: { login: 'Username', password: 'Password' },
  admin: null
}
export const State = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultState);

  const showLoading = () => dispatch({ type: SHOW_LOADING })
  const hideLoading = () => dispatch({ type: HIDE_LOADING })
  const clearError = () => dispatch({ type: CLEAR_ERROR })
  const showError = (error) => dispatch({ type: SHOW_ERROR, error })
  const onSignIn = (login) => dispatch({ type: SIGN_IN_USER, payload: login })
  const onLogout = () => dispatch({ type: LOG_OUT })
  const loadData = async () => {
    showLoading()
    clearError()
    try {
      await getDataLoad().then(axios.spread((...responses) => {
        const resOne = responses[0]
        const resTwo = responses[1]
        const resThree = responses[2]
        dispatch({
          type: GET_POSTS_DATA,
          payload: [resOne.data, resTwo.data, resThree.data]
        })
      }))
    } catch (e) {
      console.log(e)
      showError('not found 404!')
    } finally {
      hideLoading()
    }
  }

  return (
    <Context.Provider value={{
      admin: state.admin,
      users: state.users,
      data: state.data,
      loading: state.loading,
      error: state.error,
      hideLoading,
      showLoading,
      clearError,
      showError,
      loadData,
      onSignIn,
      onLogout
    }}>
      {children}
    </Context.Provider>
  )
}