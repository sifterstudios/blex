import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import {pdf} from "../../data/pdf";
interface Props {
	showPages: number
	pdf: pdf
}
export const BlexPdfViewer: React.FC<Props> ({showPages}) => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
}

	return (
		<>
			<Document file="../../assets/superstition.pdf" onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</>)
}
