import React, { useState } from "react";
import {useEffect} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import axios from "axios";
import pdf from "../../types/pdf";



interface Props {
	id: number
}
export const BlexPdfViewer: React.FC<Props> = ({id}) => {
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
			<Document file={'https://api.blex.today/'+id} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</>)
}

