import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { TodoActions, TodoActionTypes } from '../../types/todo'


export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoActions>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit },
      })
      setTimeout(() => {
        dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
      }, 1000)
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Error...' })
    }
  }
}

export const setTodoPage = (page: number): TodoActions => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}

