import { useContext } from 'react'
import TodoUpdate from './TodoUpdate'
import { TodosContext } from '../../context/todos'

function TodoItem ({ item }) {
  const { todos, setTodos } = useContext(TodosContext)

  const handleClickDelete = () => {
    const newTodos = todos.filter(todo => {
      return todo.id !== item.id
    })
    setTodos(newTodos)
  }
  return (
    <li className='flex space-x-3 bg-sky-400 p-3 rounded'>
      <TodoUpdate item={item} />
      <button onClick={handleClickDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
