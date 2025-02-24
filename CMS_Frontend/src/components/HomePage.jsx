import React from 'react'
import LinkComponent from './LinkComponent'

const HomePage = () => {
  return (
    <div className='p-8 gap-4 flex flex-row items-center'>
      <LinkComponent to="/login" theme='dark' text='Login' />
      <LinkComponent to="/register" theme='light' text='Register' />
      <LinkComponent to="/codeeditor" theme='dark' text='Code Editor' />    
    </div>
  )
}

export default HomePage
