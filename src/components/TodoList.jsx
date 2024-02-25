import { useTodos } from '../hooks/useTodos'

import TodoItem from './TodoItem'

function TodoList () {
  const { todos } = useTodos()

  return (
    <ul className='space-y-5 mt-5'>
      {todos.map(item => <TodoItem key={item.id} item={item} />)}
    </ul>
  )
}

export default TodoList
