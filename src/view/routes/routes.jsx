import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Form } from '../pages/Form'
import { Layout } from '../components/Layout/Layout'
import { ToDoAdd } from '../pages/ToDoAdd/ToDoAdd'
import { Todolist } from '../components/TodoList/Todolist'

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
        path: 'toDolist',
        Component: Todolist
      },
      {
        path: 'toDoAdd',
        Component: ToDoAdd
      }
    ]
  }
])
