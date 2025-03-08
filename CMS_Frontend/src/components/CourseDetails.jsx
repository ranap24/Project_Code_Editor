import React from 'react'
import SVGComponents from './SVGComponents'
import Module from './Module'

const CourseDetails = () => {

    const courses = {
        'python': {
            title: 'Python',
            descriptionHeading: 'Why learn Python?',
            descriptionParagraph: "Python is ideal for Machine Learning with libraries like TensorFlow and Scikit-learn, for Data Science with Pandas and NumPy, and for Web Development using frameworks like Django and Flask, all thanks to its simplicity and powerful ecosystem.",
            topicHeading: 'What will you learn?',
            topics: ['Python Basics', 'Functions, Built-in Function,Lambda Function', 'File handling,Exception Handling', 'Python Data Structures', 'Python Modules', 'OOPs Concepts', 'Database Connection and more...']
        }
    }

    const modules = [
        {
            "title" : "Introduction to Python",
        },
        {

            "title": "Variables, Keywords, Data Types",
        },
        {

            "title" : "Conditional Statements",
        },
        {

            "title": "Functions"
        }
    ]
    return (
        <div className='w-[980px] h-full flex flex-col justify-center items-start bg-paperwhite pl-16 pt-8 pb-16 relative'>
            <div className='flex flex-col justify-center items-start gap-4 sticky top-8 bg-paperwhite'>
            <div className='flex flex-row justify-center items-center'>
                <h1 className='font-raleway text-[32px] text-paperblack font-normal'>{courses.python.title}</h1>
            </div>

            <div className='w-fit flex flex-row justify-center items-center gap-10 mt-8'>
                <div className='w-[200px] h-[125px] bg-paperblack flex flex-col items-center justify-center gap-4 rounded-4xl'>
                    <SVGComponents svgImage="Level" />
                    <p className='text-2xl font-raleway text-paperwhite'>Beginner</p>
                </div>
                <div className='w-[200px] h-[125px] bg-paperblack flex flex-col items-center justify-center gap-4 rounded-4xl'>
                    <SVGComponents svgImage="Alarm" />
                    <p className='text-2xl font-raleway text-paperwhite'>45 Days</p>
                </div>
                <div className='w-[200px] h-[125px] bg-paperblack flex flex-col items-center justify-center gap-4 rounded-4xl'>
                    <SVGComponents svgImage="Certified" />
                    <p className='text-2xl font-raleway text-paperwhite'>Certified</p>
                </div>
                <div className='w-[200px] h-[125px] bg-paperwhite flex flex-col items-center justify-center gap-4 rounded-4xl border-2 border-paperblack'>
                    <SVGComponents svgImage="Join" light />
                    <p className='text-2xl font-raleway text-paperblack'>Join Now</p>
                </div>
            </div>
            </div>

            <div className='w-[896px] h-fit flex flex-col items-start justify-center gap-4 mt-8'>
                <p className='font-raleway font-bold text-2xl'>{courses.python.descriptionHeading}</p>
                <p className='font-raleway font-extralight text-2xl'>{courses.python.descriptionParagraph}</p>
            </div>

            <div className='w-full h-fit flex flex-col items-start justify-center gap-4 mt-8'>
                <p className='font-raleway font-bold text-2xl'>{courses.python.topicHeading}</p>
                <div className='flex flex-wrap'>
                    <ul className='pl-5'>
                        {courses.python.topics.map((topic, index) => (
                            <li key={index} className='font-raleway font-normal text-xl my-4'>
                                <div className='flex flex-row gap-4'>
                                    <SVGComponents svgImage="Star" light />
                                    <p>{topic}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='w-full flex flex-col items-start justify-center gap-4'>
                <h1 className='font-raleway text-2xl font-bold mt-8'>Course Content</h1>
                <div className='w-full h-fit flex flex-col items-start justify-center gap-4 '>
                    <>
                  {modules.map((module,index) => <Module number={index+1} title={module.title} key={index}/>)}     
                    </>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
