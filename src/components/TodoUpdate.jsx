import { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

function TodoUpdate ({ item }) {
  const [enableEdit, setEnableEdit] = useState(true)
  const { updateTodo, doneTodo } = useTodos()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleClickEdit = () => {
    if (item.done) return
    setEnableEdit(!enableEdit)
  }

  const handleChangeValue = (event) => {
    updateTodo({ value: event.target.value, todo: item })
  }

  const handleChangeDone = () => {
    doneTodo(item)
  }

  return (
    <form className='flex flex-1 items-center justify-between pr-2' onSubmit={handleSubmit}>
      <div className='flex items-center'>
        <input
          className='w-5 h-5 rounded accent-emerald-400 bg-white' type='checkbox' name='' id='' checked={item.done} onChange={handleChangeDone}
        />
        <input
          className='text-black font-semibold p-1 px-2 rounded bg-transparent focus-visible:outline-none cursor-auto border-2 border-transparent' style={{
            opacity: item.done ? '.5' : '1',
            textDecoration: item.done ? 'line-through' : '',
            border: !enableEdit ? '2px solid white' : ''
          }} type='text' value={item.description} placeholder='you want to do?' onChange={handleChangeValue} readOnly={enableEdit}
        />
      </div>
      <button className='font-semibold' onClick={handleClickEdit}>Edit</button>
    </form>
  )
}

export default TodoUpdate
