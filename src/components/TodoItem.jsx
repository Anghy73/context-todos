import { useTodos } from '../hooks/useTodos'
import TodoUpdate from './TodoUpdate'

function TodoItem ({ item }) {
  const { delTodo } = useTodos()

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
