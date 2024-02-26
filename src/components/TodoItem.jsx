import { useTodos } from '../hooks/useTodos'
import TodoUpdate from './TodoUpdate'

function TodoItem ({ item }) {
  const { delTodo } = useTodos()

  const handleClickDelete = () => {
    delTodo(item)
  }

  return (
    <li className='flex justify-between space-x-3 bg-sky-400 p-3 rounded'>
      <TodoUpdate item={item} />
      <button className='font-semibold' onClick={handleClickDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
