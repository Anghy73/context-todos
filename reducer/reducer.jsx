export const reducerInitialState = JSON.parse(window.localStorage.getItem('todos')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('todos', JSON.stringify(state))
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  const { id } = actionPayload

  switch (actionType) {
    case 'ADD_TODO': {
      const newState = [
        ...state,
        {
          id: Date.now(),
          description: actionPayload,
          done: false
        }
      ]

      updateLocalStorage(newState)

      return newState
    }

    case 'DELETE_TODO': {
      const newState = state.filter(todo => todo.id !== id)

      updateLocalStorage(newState)

      return newState
    }

    case 'UPDATE_TODO': {
      const { id } = actionPayload.todo
      const newState = state.map(todo => {
        if (todo.id === id) {
          todo.description = actionPayload.value
        }
        return todo
      })

      updateLocalStorage(newState)

      return newState
    }

    case 'DONE_TODO': {
      const newState = state.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })

      updateLocalStorage(newState)

      return newState
    }
  }
}
