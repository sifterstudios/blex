import { Rating, Table } from 'flowbite-react';
import React from 'react'
import pdf from '../../types/pdf';

interface pdfProps {
	pdfs: pdf[];
}




export const BlexTable: React.FC<pdfProps> = ({ pdfs }: pdfProps) => {

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
						return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
					})}
				</Table.Body>
			</Table>
		</div>
	)
}
