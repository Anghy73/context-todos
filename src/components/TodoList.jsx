import { useTodos } from '../hooks/useTodos'

import TodoItem from './TodoItem'

function TodoList () {
  const { todos } = useTodos()

  return (
    <ul className='flex flex-col gap-4 mt-8 w-full max-w-xl'>
      {todos.map(item => <TodoItem key={item.id} item={item} />)}
    </ul>
  )
}

export default TodoList
