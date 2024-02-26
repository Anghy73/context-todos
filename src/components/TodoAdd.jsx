import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

function TodoAdd () {
  const [value, setValue] = useState('')

  const { addTodo } = useTodos()

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
    <form className='w-full max-w-xl flex justify-between border-2 border-white rounded-md' onSubmit={handleSubmit}>
      <input className='text-white bg-transparent py-2 px-3 focus-visible:outline-none flex-1' type='text' name='description' value={value} placeholder='Que vamos a hacer?' onChange={handleChange} />
      <button className='py-2 px-3 font-semibold'>Add</button>
    </form>
  )
}

export default TodoAdd
