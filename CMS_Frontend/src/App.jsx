import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CodeEditor from './components/CodeEditor';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Register from './components/Register';

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <HomePage/>
    },
    {
      path : '/login',
      element : <Login />
    },
    {
      path : '/register',
      element : <Register /> 
    },
    {
      path : '/codeeditor',
      element : <CodeEditor />
    }
  ]);
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
