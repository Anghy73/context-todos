import { useContext } from 'react'
import TodoUpdate from './TodoUpdate'
import { TodosContext } from '../../context/todos'

function TodoItem ({ item }) {
  const { delTodo } = useContext(TodosContext)

  const handleClickDelete = () => {
    delTodo(item)
  }

  return (
    <li className='flex space-x-3 bg-sky-400 p-3 rounded'>
      <TodoUpdate item={item} />
      <button onClick={handleClickDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
