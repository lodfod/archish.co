import React from 'react'

import keyboardImage from '../assets/archish_keyboard.png'
import flamingoImage from '../assets/archish_flamingo.png'
import primeImage from '../assets/archish_52prime.png'

function MainView() {
    return (
        <div className='items-center sm:h-screen text-center content-center p-20 text-4xl font-medium sm:flex justify-center sm:justify-between '>
            <span className='hover:cursor-pointer text-white hover:text-transparent hover:bg-gradient-to-r bg-clip-text hover:from-red-500 hover:to-yellow-500'>
                archish arun

            </span>

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