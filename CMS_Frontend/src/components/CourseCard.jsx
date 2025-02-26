import React from 'react'
import SVGComponents from './SVGComponents'

const CourseCard = ({ imageSrc, imageTitle, Level, time, title }) => {
    return (
        <div className='w-[249px] h-[400px] bg-paperwhite rounded-4xl border-2 border-paperblack flex flex-col justify-center items-center gap-4 p-4'>
            <div className='w-[184px] h-[132px] bg-paperblack rounded-xl flex flex-col justify-center items-center'>
                <img src={imageSrc} alt={imageTitle} className="w-16 h-16" />
            </div>
            <div className='w-[184px] flex flex-col justify-center items-start mt-4'>
                <p className='font-raleway font-normal'>{title}</p>
                <div className='w-full flex flex-row justify-start items-center gap-4 mt-4'>
                    <SVGComponents svgImage="Level" />
                    <p className='font-raleway font-normal text-paperblack'>{Level}</p>
                </div>
                <div className='w-full flex flex-row justify-start items-center gap-4 mt-4'>
                    <SVGComponents svgImage="Alarm" />
                    <p className='font-raleway font-normal text-paperblack'>{`${time} Days`}</p>
                </div>
            </div>
            <div className='w-[184px] h-[40px] bg-paperblack rounded-4xl flex flex-row justify-center items-center gap-4 px-auto mt-4'>
                <p className='font-raleway font-normal text-paperwhite'>Know more</p>
                <svg width="25" height="9" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.3536 4.85355C24.5488 4.65829 24.5488 4.34171 24.3536 4.14645L21.1716 0.964466C20.9763 0.769204 20.6597 0.769204 20.4645 0.964466C20.2692 1.15973 20.2692 1.47631 20.4645 1.67157L23.2929 4.5L20.4645 7.32843C20.2692 7.52369 20.2692 7.84027 20.4645 8.03553C20.6597 8.2308 20.9763 8.2308 21.1716 8.03553L24.3536 4.85355ZM0 5H24V4H0V5Z" fill="#E1E1DD" />
                </svg>
            </div>
        </div>
    )
}

export default CourseCard
