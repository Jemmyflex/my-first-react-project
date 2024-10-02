import './App.css'
import Todos from './pages/Todos'
import AddTodos from './pages/AddTodos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const todoRouter = createBrowserRouter([
  {path:"/",element:<Todos/>},
  {path: "/add", element:<AddTodos/>}
]);

function App() {
  return (
    <>
    <RouterProvider router={todoRouter}/>
    </>
  )
}

export default App
