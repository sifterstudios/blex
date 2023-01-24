import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import pdf from "../../types/pdf";
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
