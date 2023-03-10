import { Rating, Table } from 'flowbite-react';
import React from 'react'
import pdf from '../../types/pdf';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

interface pdfProps {
	pdfs: pdf[];
}




export const BlexTable: React.FC<pdfProps> = ({ pdfs }: pdfProps) => {

	const handleRowClick = (id: number) => {
		console.log("pressed table with id: " + id);
		window.location.href = `/document/${id}`;
		//const navigate = useNavigate();
		//navigate("/document/"+id);
		//navigate(`/document/${id}`);
		
		axios.get(`http://localhost:8080/document/${id}`);
	  }


	const handleRating = function(pdf: pdf) {
		const stars = Math.floor(pdf.rating);
		const remaining = 5 - stars;
		const starComponent = (<Rating.Star />);
		const emptyStarComponent = (<Rating.Star filled={false} />);
		const elementArray = [];

		for (let i = 0; i < stars; i++) { elementArray.push(starComponent) }
		for (let i = 0; i < remaining; i++) { elementArray.push(emptyStarComponent); }

return <Rating> {elementArray} </Rating>;

	}

	return (
		<div>
			<Table
				striped={true}
				hoverable={true}
			>
				<Table.Head>
					<Table.HeadCell>
						Song
					</Table.HeadCell>
					<Table.HeadCell>
						Artist
					</Table.HeadCell>
					<Table.HeadCell>
						Type
					</Table.HeadCell>
					<Table.HeadCell>
						Rating
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					{pdfs.map(pdf => {
						return (
							<Table.Row key={pdf.id} onClick={() => handleRowClick(pdf.id)} className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{pdf.songtitle}
								</Table.Cell>
								<Table.Cell>
									{pdf.artist}
								</Table.Cell>
								<Table.Cell>
									{pdf.type}
								</Table.Cell>
								<Table.Cell>
									{handleRating(pdf)}
								</Table.Cell>
							</Table.Row>
					)})}
				</Table.Body>
			</Table>
		</div>
	)
}
