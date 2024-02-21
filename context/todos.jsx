import { createContext, useState } from 'react'

export const TodosContext = createContext()

export function TodosProvider ({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: 'todo 1',
      done: false
    },
    {
      id: 2,
      description: 'todo 2',
      done: false
    },
    {
      id: 3,
      description: 'todo 3',
      done: true
    }
  ])

  const countTodosPending = () => {
    return todos.filter(item => item.done === false).length
  }

  const countTodosDone = () => {
    return todos.filter(item => item.done === true).length
  }

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      countTodosPending,
      countTodosDone
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
