import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { TaskProvider } from './components/context/tasks'

function App () {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  )
}

export default App
