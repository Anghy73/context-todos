import CountTodos from './components/CountTodos'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App () {
  return (
    <main className='flex flex-col items-center min-h-screen bg-slate-900 text-white selection:bg-sky-600 px-6 py-6'>
      <h1 className='text-sky-400 text-4xl font-bold m-10 text-center'>Context Todos</h1>
      <TodoAdd />
      <CountTodos />
      <TodoList />
    </main>
  )
}

export default App
