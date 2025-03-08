import React from 'react'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'
import FadingLine from './FadingLine'

const Contact = () => {
    return (
        <div className='bg-paperwhite flex flex-col justify-center items-start h-screen px-16 py-8 relative'>
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
                            <textarea className='w-[420px] h-[176px] border-2 border-paperblack bg-paperwhite appearance-none rounded-4xl p-4 focus:outline-none focus:border-3 resize-none' placeholder='Enter your Query'></textarea>
                        </div>
                    </div>
                    <ButtonComponent theme='dark' text='Get a Call back' type='submit' form />
                </form>
                <div className='w-full flex flex-row justify-center items-center'>
                    <div className='w-1/2 flex flex-row justify- items-center my-4'>
                        <FadingLine direction="horizontal" />
                        <p className='font-raleway mx-4'>or</p>
                        <FadingLine direction="horizontal" right />
                    </div>
                </div>
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='flex flex-col justify-evenly items-start gap-4 font-raleway'>
                    <p>Let's Keep in touch</p>
                    <p>We usually respond in 1 - 2 Business Days.</p>
                    <p>Mail us at xxxxxx@company.com</p>
                    <p>WhatsApp us at +91 XXXXXXXXX</p>
                </div>
                <div className='h-full flex flex-col justify-end items-start gap-4 font-raleway'>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className='flex flex-col justify-evenly items-start gap-4 font-raleway'>
                    <p>LinkedIn</p>
                    <p>GitHub</p>
                    <p>Twitter</p>
                    <p>Instragram</p>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact
