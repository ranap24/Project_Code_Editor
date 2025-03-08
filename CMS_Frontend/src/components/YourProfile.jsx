import React from 'react'
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent'   
import FadingLine from './FadingLine'

const YourProfile = () => {
  return (
              <div className='w-[930px] flex flex-col justify-between items-center'>
                    <form className='w-full'>
                        <div className='w-full grid grid-cols-2 gap-4'>
                            <div className='col-start-1 col-span-1 flex flex-col justify-center items-center'>
                                <InputComponent type='text' placeholder='Enter your First Name' />
                                <InputComponent type='text' placeholder='Enter your Email' />
                                <InputComponent type='text' placeholder='Your LinkedIn Profile Url' />
                                <InputComponent type='text' placeholder='Your Website Url' />
                            </div>
                            <div className='col-start-2 col-span-1 flex flex-col justify-center items-center'>
                                <InputComponent type='text' placeholder='Enter your Last Name' />
                                <InputComponent type='text' placeholder='Enter your Mobile Number' />
                                <InputComponent type='text' placeholder='Your GitHub Profile Url' />
                                <InputComponent type='text' placeholder='About you' />
                            </div>
                        </div>
                        <div className='w-full h-fit flex flex-row justify-between items-center my-4'>
                            <ButtonComponent theme='dark' text='Save and Update' type='submit' form />
                        </div>
                    </form>
                </div>
  )
}

export default YourProfile
