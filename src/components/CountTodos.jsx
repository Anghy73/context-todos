import { useContext } from 'react'
import { TodosContext } from '../../context/todos'

function CountTodos () {
  const { todos, countTodosPending, countTodosDone } = useContext(TodosContext)

  return (
    <div className='flex  gap-4'>
      <p>Todos total: <span className='text-sky-400 font-bold'>{todos.length}</span></p>
      <p>Todos pending: <span className='text-sky-400 font-bold'>{countTodosPending()}</span></p>
      <p>Todos done: <span className='text-sky-400 font-bold'>{countTodosDone()}</span></p>
    </div>
  )
}

export default CountTodos
