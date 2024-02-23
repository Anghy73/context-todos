import CountTodos from './components/CountTodos'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App () {
  return (
    <main className='flex flex-col items-center min-h-screen bg-slate-900 text-white'>
      <h1 className='text-sky-400 text-3xl font-bold'>Context Todos</h1>
      <TodoAdd />
      <CountTodos />
      <TodoList />
    </main>
  )
}

export default App
