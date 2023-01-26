import { Button, Carousel } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"

import band from '../../carrousel_images/Rockband.png'
import devices from '../../carrousel_images/Devices-bro.png'
import guitar from '../../carrousel_images/PlayingMusicBro2.png'
import sharing from '../../carrousel_images/Sharing-articles2.png'
import composer from '../../carrousel_images/Composer2.png'

export const LandingPage = () => {
    return (
        <>
			<div>
                <div id="introTextContainer">
                    <h1 className='text-5xl dark:text-white font-sans '>Welcome to Blex!</h1>
                    <p className='text-base dark:text-white font-thin italic decoration-dotted'>A place for sharing and finding lead sheets!</p>
                </div>

                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 flex flex-row mt-6">
                <div className='basis-2/12'></div>
                <div carousel-image-container className='basis-8/12' id="carousel-container">
                    <Carousel slideInterval={5000}>
                        <img
                            className="carousel-image"
                            src={band}
                            alt="..."

                        />
                        <img
                            className="carousel-image"
                            src={devices}
                            alt="..."
                        />
                        <img
                            className="carousel-image"
                            src={guitar}
                            alt="..."
                        />
                        <img
                            className="carousel-image"
                            src={sharing}
                            alt="..."
                        />
                        <img
                            className="carousel-image"
                            src={composer}
                            alt="A man with a guitar lsitening to music and writing"
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
            </div>
        </>
    )
}
