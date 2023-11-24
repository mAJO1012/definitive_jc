export const initialState = {
  user: null
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      globalThis.localStorage.setItem('USER', JSON.stringify(action.payload))
      return { ...state, user: action.payload }
    case 'SIGNUP_USER':
      globalThis.localStorage.setItem('USER', JSON.stringify(action.payload))
      return { ...state, user: action.payload }
    case 'ADD_TODO':
      return [...state, action.payload]

    case 'DELETE_TODO':
      return state.filter(todo => todo.userid !== action.payload)

    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.userid === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.userid === action.payload.userid) {
          return {
            ...todo,
            description: action.payload.description
          }
        }
        return todo
      })

    default:
      return state
  }
}
