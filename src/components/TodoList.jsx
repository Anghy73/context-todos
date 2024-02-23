import { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodosContext } from '../../context/todos'

function TodoList () {
  const { todos } = useContext(TodosContext)

  return (
    <ul className='space-y-5 mt-5'>
      {todos.map(item => <TodoItem key={item.id} item={item} />)}
    </ul>
  )
}

export default TodoList
