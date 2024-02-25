import { useContext } from 'react'
import { TodosContext } from '../../context/todos'

export const useTodos = () => {
  const todos = useContext(TodosContext)

  if (todos === undefined) {
    throw new Error('useTodos must be used within a TodosProvider')
  }

  return todos
}
