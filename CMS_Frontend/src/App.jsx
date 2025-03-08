import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CodeEditor from './components/CodeEditor';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Courses from './components/Courses'; 
import RootLayout from './components/RootLayout';
import CourseDetails from './components/CourseDetails';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import CoursesEnrolled from './components/CoursesEnrolled';
import CertificatesEarned from './components/CertificatesEarned';
import YourProfile from './components/YourProfile'; 

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
        },
        {
          path : 'about',
          element: <About/>
        },
        {
          path : 'contact',
          element : <Contact/>
        },
        {
          path : 'profile',
          element : <Profile/>,
          children : [
            {
              index: true,
              element: <CoursesEnrolled/>
            },
            {
              path : 'coursesEnrolled',
              element : <CoursesEnrolled/>
            },
            {
              path : 'certificatesEarned',
              element : <CertificatesEarned/>
            },
            {
              path : 'yourProfile',
              element : <YourProfile/>
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
