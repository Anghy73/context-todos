import { createContext, useReducer } from 'react'

export const TodosContext = createContext()

const reducerInitialState = [{
  id: 1,
  description: 'todo1',
  done: false
}]

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TODO': {
      console.log(actionPayload)

      return [
        ...state,
        {
          id: state.length + 1,
          description: actionPayload,
          done: false
        }
      ]
    }
  }
}

export function TodosProvider ({ children }) {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     description: 'todo 1',
  //     done: false
  //   },
  //   {
  //     id: 2,
  //     description: 'todo 2',
  //     done: false
  //   },
  //   {
  //     id: 3,
  //     description: 'todo 3',
  //     done: true
  //   }
  // ])

  // const countTodosPending = () => {
  //   return todos.filter(item => item.done === false).length
  // }

  // const countTodosDone = () => {
  //   return todos.filter(item => item.done === true).length
  // }

  const [state, dispatch] = useReducer(reducer, reducerInitialState)

  const addTodo = product => dispatch({
    type: 'ADD_TODO',
    payload: product
  })

  return (
    <TodosContext.Provider value={{
      todos: state,
      addTodo
      // setTodos,
      // countTodosPending,
      // countTodosDone
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
