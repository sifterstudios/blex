import { TextInput, Button } from 'flowbite-react'
import React from 'react'
import { Table } from 'flowbite-react';
import pdf from '../../types/pdf';
import axios from 'axios';



export const Search = () => {

  const pdfs:pdf[] = JSON.parse(localStorage.getItem('pdfList')||"");

  const handleRowClick = (id: number) => {
		console.log("pressed table with id: " + id);
		window.location.href = `/document/${id}`;
		//const navigate = useNavigate();
		//navigate("/document/"+id);
		//navigate(`/document/${id}`);
		
		axios.get(`http://localhost:8080/document/${id}`);
	  }



  return (
<div className="flex h-96 flex-col justify-center gap-4 p-56">
  <TextInput
    id="searchText"
    type="text"
    placeholder="Search for blex!"
    required={true}
    sizing="lg"
  />
<Button>Search</Button>

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
									stars here
								</Table.Cell>
							</Table.Row>
					)})}
				</Table.Body>
			</Table>
</div>
  )
}
