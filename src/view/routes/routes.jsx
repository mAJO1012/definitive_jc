import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Form } from '../pages/Form'
import { Layout } from '../components/Layout/Layout'
import { ToDoAdd } from '../pages/ToDoAdd/ToDoAdd'
import { ToDo } from '../pages/ToDo/ToDo'

export const router = createBrowserRouter([
  {
    path: 'form',
    Component: Form
  },
  {
    path: '',
    Component: Home
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'toDo',
        Component: ToDo
      },
      {
        path: 'toDoAdd',
        Component: ToDoAdd
      }
    ]
  }
])
