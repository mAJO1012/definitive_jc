import { createContext, useReducer } from 'react'
import { initialState, todoReducer } from '../../../reducer/todoReducer'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
