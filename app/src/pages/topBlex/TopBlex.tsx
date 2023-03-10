import React from 'react'
import { BlexTable } from '../../components/BlexTable/BlexTable';
import pdf from '../../types/pdf'

export const TopBlex = () => {

const pdf: pdf = {
    id: 1,
    userId: 5342,
    rating: 3.4,
    type: 'Full Band',
    artist: 'Maren&Bjørn',
    songtitle: 'I love TypeScript',
    numRatings: 5342,
    }; 


const pdfList = JSON.parse(localStorage.getItem('pdfList')||"");

    return (
    <>
    <br/>
    <br/>
    <br/>
       <h1 className='text-white text-5xl mb-20'>Top Blex</h1> 
       <BlexTable pdfs={pdfList} />
    </>
    )
}
