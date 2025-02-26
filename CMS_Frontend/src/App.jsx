import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CodeEditor from './components/CodeEditor';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Courses from './components/Courses'; 
import RootLayout from './components/RootLayout';
import CourseDetails from './components/CourseDetails';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'courses',
          children: [
            {
              index: true,
              element: <Courses />
            },
            {
              path: ':courseName',
              element: <CourseDetails />
            }
          ]
        }
      ]
    },
    {
      path: '/codeeditor',
      element: <CodeEditor />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
