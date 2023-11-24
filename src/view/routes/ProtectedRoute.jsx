import { useContext } from 'react'
import { TaskContext } from '../components/context/tasks'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute ({ children }) {
  const { state } = useContext(TaskContext)
  if (!state.user) {
    return <Navigate to='/home' replace />
  }
  return children
}
