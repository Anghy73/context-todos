import { useTodos } from '../hooks/useTodos'

function CountTodos () {
  const { todos, countTodosPending, countTodosDone } = useTodos()

  return (
    <div className='flex flex-col justify-center gap-4 mt-8 w-full max-w-xl md:flex-row'>
      <p className='border-2 flex-1 flex justify-center py-6 rounded-lg'>Todos total: <span className='text-sky-400 font- ml-2'>{todos.length}</span></p>
      <p className='border-2 flex-1 flex justify-center py-6 rounded-lg'>Todos pending: <span className='text-sky-400 font- ml-2'>{countTodosPending()}</span></p>
      <p className='border-2 flex-1 flex justify-center py-6 rounded-lg'>Todos done: <span className='text-sky-400 font- ml-2'>{countTodosDone()}</span></p>
    </div>
  )
}

export default CountTodos
