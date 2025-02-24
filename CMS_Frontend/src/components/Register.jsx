import React from 'react'
import LinkComponent from './LinkComponent'
import FadingLine from './FadingLine'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'

const Register = () => {
    return (
        <div className='w-full h-screen p-8 bg-paperwhite flex flex-col justify-center items-center relative'>
            <div className='w-fit h-fit flex flex-col justify-center items-center absolute top-8 left-8'>
                <LinkComponent theme='dark' text='Home' to="/" />
            </div>
            <div className='w-fit h-fit rounded-4xl flex flex-col justify-center items-center'>
                <h1 className='font-raleway text-[64px] text-paperblack font-normal'>Register</h1>
                <FadingLine direction='horizontal' both />
                <div className='flex flex-col justify-between items-center'>
                    <form>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='col-start-1 col-span-1 flex flex-col justify-center items-center'>
                                <InputComponent type='text' placeholder='Enter your First Name' />
                                <InputComponent type='text' placeholder='Enter your Email' />
                                <InputComponent type='text' placeholder='Enter your Password' />
                            </div>
                            <div className='col-start-2 col-span-1 flex flex-col justify-center items-center'>
                                <InputComponent type='text' placeholder='Enter your Last Name' />
                                <InputComponent type='text' placeholder='Enter your Mobile Number' />
                                <InputComponent type='text' placeholder='Re-Enter your Password' />
                            </div>
                        </div>
                        <div className='w-full h-fit flex flex-row justify-start items-center my-4'>
                            <div className='w-[420px] h-[72px] flex flex-row justify-start items-center my-4'>
                                <input type='checkbox' className='h-6 w-6 border border-paperblack bg-paperwhite appearance-none rounded-sm checked:bg-paperblack checked:border-paperblack checked:text-paperwhite checked:content-["✔"]' />
                                <p className='font-raleway ml-2'>I agree to the Terms and Conditions</p>
                            </div>
                            <FadingLine />
                            <ButtonComponent theme='dark' text='Submit' type='submit' form />
                        </div>
                    </form>
                </div>
                <div className='w-full flex flex-row justify-center items-center my-4'>
                    <FadingLine direction="horizontal" />
                    <p className='font-raleway mx-4'>or</p>
                    <FadingLine direction="horizontal" right />
                </div>
                <div className='w-full h-fit flex flex-row justify-start items-center my-4'>
                    <ButtonComponent theme='dark' text='Sign up with Google' type='button' form/>
                    <FadingLine />
                    <ButtonComponent theme='light' text='I already have an account' type='submit' form />
                </div>
            </div>
        </div>
    )
}

export default Register
