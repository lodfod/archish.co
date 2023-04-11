import React from 'react'

import keyboardImage from '../assets/archish_keyboard.png'
import flamingoImage from '../assets/archish_flamingo.png'
import primeImage from '../assets/archish_52prime.png'
import linkedinIcon from '../assets/linkedin.png'
import instagramIcon from '../assets/instagram.png'

import { DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

function MainView() {
    return (
        <div className='items-center sm:h-screen text-center content-center p-20 text-4xl font-medium sm:flex justify-center sm:justify-between '>
            <div className="">
                <span className='hover:cursor-pointer text-white hover:text-transparent hover:bg-gradient-to-r bg-clip-text hover:from-red-500 hover:to-yellow-500'>
                    archish arun
                </span>
                <div className='flex px-10 sm:px-4 justify-between pt-1 '>
                    <DocumentTextIcon className='h-5 w-5 hover:cursor-pointer hover:shadow-lg hover:shadow-red-500 rounded-md' />
                    <EnvelopeIcon className=' h-5 bg-transparent w-5 hover:cursor-pointer hover:shadow-lg hover:shadow-orange-700 rounded-md' />
                    <div className='pl-1'>
                        <img className=' h-5 w-5  hover:cursor-pointer hover:shadow-lg hover:shadow-orange-500  ' src={linkedinIcon} alt="" />
                    </div>
                    <div className='pl-1'>
                        <img className=' h-5 w-5 invert hover:cursor-pointer hover:shadow-lg hover:shadow-blue-500 rounded-md ' src={instagramIcon} alt="" />


                    </div>




                </div>
            </div>

            <div className='pt-2 flex flex-col sm:flex-row justify-center items-center '>
                <div>
                    <div className='h-36 w-36 pt-5 flex justify-center'>
                        <img className=" h-fit  align-middle grayscale hover:grayscale-0 hover:cursor-pointer" src={flamingoImage} alt="" />
                    </div>

                </div>

                <div>
                    <div className='h-36 w-36 flex justify-center align-middle'>
                        <img className=" h-36 grayscale hover:grayscale-0 hover:cursor-pointer" src={keyboardImage} alt="" />
                    </div>

                </div>

                <div>
                    <div className='h-44 w-44 flex justify-center align-middle'>
                        <img className="h-fit grayscale hover:grayscale-0 pt-6 hover:cursor-pointer" src={primeImage} alt="" />
                    </div>

                </div>




            </div>

        </div>
    )
}

export default MainView