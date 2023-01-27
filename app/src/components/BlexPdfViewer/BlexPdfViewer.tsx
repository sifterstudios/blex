import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';



interface Props {
	id: number
}
export const BlexPdfViewer: React.FC<Props> = ({id}) => {
	const [numPages, setNumPages] = useState(-1);
	const [pageNumber, setPageNumber] = useState(1);
	//const filepath:string = 'https://api.blex.today/document/download/';
	const filepath:string = 'http://localhost:8080/document/download/';

	interface pages {
		numPages : number;
	}

	function onDocumentLoadSuccess({ numPages }: pages) {
		setNumPages(numPages);
	}

	return (
		<>
			<div className="dark:text-white">
				<Document file={filepath+id} onLoadSuccess={onDocumentLoadSuccess} className="dark:text-white">
					<Page pageNumber={pageNumber} className="dark:text-white"/>
				</Document>
				<p className="dark:text-white">
					Page {pageNumber} of {numPages}
				</p>
			</div>
		</>
	)
}