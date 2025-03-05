import React from 'react'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'
import FadingLine from './FadingLine'

const Contact = () => {
    return (
        <div className='bg-paperwhite flex flex-col justify-center items-start w-full h-screen px-16 py-8 relative'>
            <div className='flex flex-row justify-center items-center gap-4 absolute top-8 left-16'>
                <h1 className='font-raleway text-[32px] text-paperblack font-normal'>Contact Us</h1>
            </div>

            <div className='flex flex-col justify-start items-start'>
                <form>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='col-start-1 col-span-1 flex flex-col justify-center items-center'>
                            <InputComponent type="text" placeholder="Enter your Name" />
                            <InputComponent type="text" placeholder="Enter your MobileNumber" />
                        </div>
                        <div className='col-start-2 col-span-1 flex flex-col justify-center items-center'>
                            <textarea className='w-[420px] h-[176px] border-2 border-paperblack bg-paperwhite appearance-none rounded-4xl p-4 focus:outline-none focus:border-3' placeholder='Enter your Query'></textarea>
                        </div>
                    </div>
                    <ButtonComponent theme='dark' text='Get a Call back' type='submit' form />
                </form>
            </div>
                <div className='w-full flex flex-row justify-center items-start my-4'>
                    <FadingLine direction="horizontal" />
                    <p className='font-raleway mx-4'>or</p>
                    <FadingLine direction="horizontal" right />
                </div>
        </div>
    )
}

export default Contact
