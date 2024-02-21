import './tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodosProvider } from '../context/todos'

ReactDOM.createRoot(document.getElementById('app')).render(
  <TodosProvider>
    <App />
  </TodosProvider>
)
