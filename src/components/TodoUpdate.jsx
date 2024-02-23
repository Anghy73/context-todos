import { useContext, useState } from 'react'
import { TodosContext } from '../../context/todos'

function TodoUpdate ({ item }) {
  const [enableEdit, setEnableEdit] = useState(true)
  const { addTodo } = useContext(TodosContext)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleClickEdit = () => {
    if (item.done) return
    setEnableEdit(!enableEdit)
  }

  const handleChangeValue = (event) => {
    // const newTodos = todos.map(todo => {
    //   if (todo.id === item.id) {
    //     todo.description = event.target.value
    //   }
    //   return todo
    // })

    addTodo(item)
  }

  // const handleChangeDone = () => {
  //   const newTodos = todos.map(todo => {
  //     if (todo.id === item.id) {
  //       todo.done = !todo.done
  //     }
  //     return todo
  //   })

  //   setTodos(newTodos)
  // }

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type='checkbox' name='' id='' checked={item.done} onChange={handleChangeDone} /> */}
      <input
        className='text-black font-semibold p-1 px-2 rounded bg-transparent focus-visible:outline-none cursor-auto border-2 border-transparent' style={{
          textDecoration: item.done ? 'line-through' : '',
          border: !enableEdit ? '2px solid white' : ''
        }} type='text' value={item.description} placeholder='you want to do?' onChange={handleChangeValue} readOnly={enableEdit}
      />
      <button onClick={handleClickEdit}>Edit</button>
    </form>
  )
}

export default TodoUpdate
