import React, {useEffect, useRef} from 'react'

import keyboardImage from '../assets/archish_keyboard.png'
import flamingoImage from '../assets/archish_flamingo.png'
import primeImage from '../assets/archish_52prime.png'
import linkedinIcon from '../assets/linkedin.png'
import instagramIcon from '../assets/instagram.png'

import { DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

function MainView() {
    const delay = 18;

    const cursorVisible = useRef(true)
    const cursorEnlarged = useRef(false)

    const endX = useRef(window.innerWidth / 2)
    const endY = useRef(window.innerHeight / 2)

    const _x = useRef(0)
    const _y = useRef(0)

    const requestRef = useRef(null)

    const blob = useRef(null)

   const mouseMoveEvent = (e: any) => {
    
    endX.current = e.pageX - Math.abs(0.04*window.innerWidth);
    endY.current = e.pageY - Math.abs(window.innerHeight * 0.04);
    //@ts-ignore
    blob.current.animate(
        {
            top: endY.current + 'px',
            left: endX.current + 'px',

        }, {duration: 1000, fill:"forwards"}
    )
        
    
        
   }

   useEffect(() => {
    document.addEventListener('mousemove', mouseMoveEvent)
    return () => {
        document.removeEventListener('mousemove', mouseMoveEvent)
    }
   }, [])
    return (
        <>
        <div className='blur-2xl'>
        
        <div ref={blob} className='blob'>
            



   


        </div>
       

       </div>
            <div className='items-center sm:h-screen text-center content-center p-20 text-4xl font-medium sm:flex justify-center sm:justify-between z-10 '>
                <div className="">
                    <div onClick={(e) => window.location.href = "/#"} className=' text-white hover:text-transparent hover:bg-gradient-to-r bg-clip-text hover:from-red-500 hover:to-yellow-500'>
                        archish arun
                        <div className='font-light text-sm pb-2'>
                            student, developer, musician
                        </div>
                    </div>
                    <div className='flex px-10 sm:px-4 justify-between pt-1 '>
                        <a href="mailto:me@archisharun.com?subject=Request for Resume">
                            <DocumentTextIcon className='h-5 w-5 transition ease-in-out  hover:scale-110 hover:shadow-lg hover:shadow-red-500 rounded-md' />
                        </a>

                        <a href="mailto:me@archisharun.com?subject=Request for Resume">
                            <EnvelopeIcon className=' h-5 bg-transparent w-5 transition ease-in-out  hover:scale-110 hover:shadow-lg hover:shadow-orange-700 rounded-md' />
                        </a>

                        <a href="https://linkedin.com/in/archisharun" target='_blank'>
                            <div className='pl-1'>
                                <img className=' h-5 w-5  transition ease-in-out  hover:scale-110  hover:shadow-lg hover:shadow-orange-500  ' src={linkedinIcon} alt="" />
                            </div>
                        </a>


                        <a href="https://instagram.com/archisharun" target="_blank">
                            <div className='pl-1'>
                                <img className=' h-5 w-5 invert  transition ease-in-out  hover:scale-110 hover:shadow-lg hover:shadow-blue-500 rounded-md ' src={instagramIcon} alt="" />
                            </div>
                        </a>




                    </div>
                </div>

                <div className='pt-2 flex flex-col  sm:flex-row justify-center items-center'>
                    <button onClick={() => window.open('https://linktr.ee/archisharun', '_blank')}>
                        <div className='w-36 pt-5 flex justify-center'>
                            <img className="transition ease-in-out  hover:scale-110 w-36  align-middle grayscale hover:grayscale-0 " src={flamingoImage} alt="" />
                        </div>

                    </button>

                    <button onClick={() => window.open('https://open.spotify.com/artist/4f5hsDIno1YcAWvudVPyeu?si=OKrmNktfS9Cp8L6Nb9vbzQ', '_blank')}>
                        <div className='h-36 w-36 flex justify-center align-middle'>
                            <img className="transition ease-in-out  hover:scale-110  h-36 grayscale hover:grayscale-0 " src={keyboardImage} alt="" />
                        </div>

                    </button>

                    <button onClick={() => window.open('https://linktr.ee/52prime', "_blank")}>
                        <div className='w-44 flex justify-center align-middle'>
                            <img className="transition ease-in-out  hover:scale-110 w-44 grayscale hover:grayscale-0 pt-6 " src={primeImage} alt="" />
                        </div>

                    </button>




                </div>

            </div>
        </>

    )
}

export default MainView