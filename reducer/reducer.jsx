export const reducerInitialState = []

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  const { id } = actionPayload

  switch (actionType) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: Date.now(),
          description: actionPayload,
          done: false
        }
      ]
    }

    case 'DELETE_TODO': {
      return state.filter(todo => todo.id !== id)
    }

    case 'UPDATE_TODO': {
      const { id } = actionPayload.todo
      return state.map(todo => {
        if (todo.id === id) {
          todo.description = actionPayload.value
        }
        return todo
      })
    }

    case 'DONE_TODO': {
      return state.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
    }
  }
}
