import React from 'react'
import { BlexTable } from '../../components/BlexTable/BlexTable';
import { pdf } from '../../data/pdf'

export const TopBlex = () => {

const pdf: pdf = {
    id: 1,
    rating: 3.4,
    type: 'Full Band',
    artist: 'Maren&Bjørn',
    song: 'I love TypeScript',
    link: 'bit.do/YeetYeet',
    numRatings: 5342,
    }; 


    return (
    <>
    <br/>
    <br/>
    <br/>
       <h1 className='text-white text-5xl mb-20'>Top Blex</h1> 
       <BlexTable pdfs={[pdf]} />
    </>
    )
}
