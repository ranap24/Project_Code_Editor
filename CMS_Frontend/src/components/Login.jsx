import React from 'react'
import ButtonComponent from './ButtonComponent'
import FadingLine from './FadingLine'
import InputComponent from './InputComponent'
import LinkComponent from './LinkComponent'

const Login = () => {
    return (
        <div className='w-full h-full p-8 bg-paperwhite flex flex-col justify-center items-center relative'>
            <div className='w-fit h-fit flex flex-col justify-center items-center absolute top-8 left-8'>
                <LinkComponent theme='dark' text='Home' to="/" />
            </div>
            <div className='w-[420px] h-fit rounded-4xl flex flex-col justify-center items-center'>
                <h1 className='font-raleway text-[64px] text-paperblack font-normal'>Login</h1>
                <FadingLine direction='horizontal' both />
                <div className='flex flex-col justify-between items-center'>
                    <form>
                        <InputComponent type='text' placeholder='Enter your Username or Email' />
                        <InputComponent type='text' placeholder='Enter your Password' />
                        <ButtonComponent theme='dark' text='Submit' type='submit' form />
                    </form>
                </div>
                <div className='w-full flex flex-row justify-center items-center my-4'>
                    <FadingLine direction="horizontal" />
                    <p className='font-raleway mx-4'>or</p>
                    <FadingLine direction="horizontal" right />
                </div>
                <div className='w-full flex flex-col justify-between items-center'>
                    <ButtonComponent theme='dark' text='Sign in with Google' type='button' form/>
                    <div className='w-full flex flex-row justify-start items-center my-4'>
                        <a href='#' className='font-raleway'>Forgot Password?</a>
                    </div>
                    <ButtonComponent theme='light' text='Create a new Account' type='button' form/>
                </div>
            </div>


        </div>
    )
}

export default Login
