import React, { useState } from "react";
import {useEffect} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import axios from "axios";
import pdf from "../../types/pdf";


export const BlexPdfViewer = () => {
	return (
	<div>
	<h1>HELLO THERE</h1>
	</div>
	);
}



/*
interface Props {
	//pdfUrl: string;
  }
  
 export const BlexPdfViewer: React.FC<Props> = ({ pdfUrl }) => {
	const [numPages, setNumPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const [pdfData, setPdfData] = useState<Uint8Array | null>(null);
  
	let pdfUrl:string = "";

	useEffect(() => {
	  const fetchPdf = async () => {
		try {
		  const response = await axios.get(pdfUrl, {
			responseType: 'arraybuffer',
			headers: {
			  'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
			},
		  });
		  setPdfData(new Uint8Array(response.data));
		} catch (error) {
		  console.log(error);
		}
	  };
	  fetchPdf();
	}, [pdfUrl]);
  
	function onDocumentLoadSuccess({ numPages}:any) {
	  setNumPages(numPages);
	}
  
	return (
	  <div>
		<h1>HELLO THERE</h1>
		<Document
		  file={pdfData}
		  onLoadSuccess={onDocumentLoadSuccess}
		>
		  <Page pageNumber={pageNumber} />
		</Document>
		<p>Page {pageNumber} of {numPages}</p>
	  </div>
	);
  };
*/





/* ORIGINALT, LÅ HER FRA FØR
interface Props {
	showPages: number
	numPages: number
	pdf: pdf
}
export const BlexPdfViewer: React.FC<Props> = ({pdf}) => {
	const [numPages, setNumPages] = useState(-1);
	const [pageNumber, setPageNumber] = useState(1);

interface pages {
	numPages : number;
}

	function onDocumentLoadSuccess({ numPages }: pages) {
		setNumPages(numPages);
}

	return (
		<>
			<Document file={pdf.link} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</>)
}
*/
