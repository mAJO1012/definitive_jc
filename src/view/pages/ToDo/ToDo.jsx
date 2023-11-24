import { IconTrash } from '@tabler/icons-react'
import './ToDo.css'
export const icono2 = () => {
  return <IconTrash />
}

export const ToDo = ({ todo }) => {
  return (
    <>
      <tr>
        <td>{todo && todo.name && todo.name}</td>
        <td>{todo && todo.description && todo.description}</td>
        <td>{todo && todo.finisDate && todo.finisDate}</td>
        <td>
          {/* <button onClick={() => dispatch({ type: 'SET_CURRENT_PRODUCT', payload: todo })}>Editar</button> */}
          {/* <button onClick={handleDeleteTodo}>Eliminar</button> */}
        </td>
      </tr>
    </>
  )
}
