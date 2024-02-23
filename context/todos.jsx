import { createContext, useReducer } from 'react'
import { reducer, reducerInitialState } from '../reducer/reducer'

export const TodosContext = createContext()

export function TodosProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, reducerInitialState)

  const addTodo = product => dispatch({
    type: 'ADD_TODO',
    payload: product
  })

  const delTodo = product => dispatch({
    type: 'DELETE_TODO',
    payload: product
  })

  const updateTodo = product => dispatch({
    type: 'UPDATE_TODO',
    payload: product
  })

  const doneTodo = product => dispatch({
    type: 'DONE_TODO',
    payload: product
  })

  const countTodosPending = () => {
    return state.filter(item => item.done === false).length
  }

  const countTodosDone = () => {
    return state.filter(item => item.done === true).length
  }

  return (
    <TodosContext.Provider value={{
      todos: state,
      addTodo,
      delTodo,
      updateTodo,
      doneTodo,
      countTodosPending,
      countTodosDone
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
