import { useReducer } from 'react'
import { todoReducer } from '../../reducer/todoReducer'

export const useTodo = () => {
  const initialState = []

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const todosCount = todos.length
  const pendingTodosCount = todos.filter(todo => !todo.done).length

  const handleNewTodo = todo => {
    const action = {
      type: 'ADD_TODO',
      payload: todo
    }
    dispatch(action)
  }

  const handleDeleteTodo = userId => {
    const action = {
      type: 'DELETE_TODO',
      payload: userId
    }
    dispatch(action)
  }

  const handleCompleteTodo = userId => {
    const action = {
      type: 'COMPLETE_TODO',
      payload: userId
    }
    dispatch(action)
  }

  const handleUpdateTodo = (userId, name, description, finishDate) => {
    const action = {
      type: 'UPDATE_TODO',
      payload: userId,
      name,
      description,
      finishDate
    }
    dispatch(action)
  }
  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  }
}
