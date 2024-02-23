import { useContext, useState } from 'react'
import { TodosContext } from '../../context/todos'

function TodoAdd () {
  const [value, setValue] = useState('')

  const { addTodo } = useContext(TodosContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (value === '' || value[0] === ' ') {
      setValue('')
      return
    }

    const { description } = Object.fromEntries(new FormData(event.target))

    addTodo(description)

    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <form className='mt-5' onSubmit={handleSubmit}>
      <input className='text-black' type='text' name='description' value={value} placeholder='Que vamos a hacer?' onChange={handleChange} />
      <button>Add</button>
    </form>
  )
}

export default TodoAdd
