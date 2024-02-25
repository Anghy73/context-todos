import { useTodos } from '../hooks/useTodos'

function CountTodos () {
  const { todos, countTodosPending, countTodosDone } = useTodos()

  return (
    <div className='flex  gap-4'>
      <p>Todos total: <span className='text-sky-400 font-bold'>{todos.length}</span></p>
      <p>Todos pending: <span className='text-sky-400 font-bold'>{countTodosPending()}</span></p>
      <p>Todos done: <span className='text-sky-400 font-bold'>{countTodosDone()}</span></p>
    </div>
  )
}

export default CountTodos
