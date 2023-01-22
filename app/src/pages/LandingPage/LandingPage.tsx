import { Button, Carousel } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
    return (
        <>
			<br />
			<br />
			<br />
            <h1 className='text-5xl dark:text-white font-sans '>Welcome to Blex!</h1>
            <p className='text-base dark:text-white font-thin italic decoration-dotted'>A place for sharing and finding lead sheets!</p>
			<br />
			<br />
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 flex flex-row mt-6">
            <div className='basis-2/12'></div>
            <div className='basis-8/12'>
                <Carousel slideInterval={5000}>
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="..."
                    />
                </Carousel>
                <div className='flex flex-row-reverse mr-6 mt-2'>
               <Link to="/newuser"> 
                <Button>Register</Button>
                </Link>
                <Link to="/signin">
                <Button className='mr-2' color="gray">Sign in</Button>
                </Link>
                </div>
            </div>
            <div className='basis-2/12'></div>
            </div>
        </>
    )
}
