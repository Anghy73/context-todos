import { useContext, useState } from 'react'
import { TodosContext } from '../../context/todos'

function TodoUpdate ({ item }) {
  const [enableEdit, setEnableEdit] = useState(true)
  const { todos, setTodos } = useContext(TodosContext)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleClickEdit = () => {
    if (item.done) return
    setEnableEdit(!enableEdit)
  }

  const handleChangeValue = (event) => {
    const newTodos = todos.map(todo => {
      if (todo.id === item.id) {
        todo.description = event.target.value
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleChangeDone = () => {
    const newTodos = todos.map(todo => {
      if (todo.id === item.id) {
        todo.done = !todo.done
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='checkbox' name='' id='' checked={item.done} onChange={handleChangeDone} />
      <input
        className='text-black font-semibold' style={{
          textDecoration: item.done ? 'line-through' : ''
        }} type='text' value={item.description} placeholder='you want to do?' onChange={handleChangeValue} readOnly={enableEdit}
      />
      <button onClick={handleClickEdit}>Edit</button>
    </form>
  )
}

export default TodoUpdate
