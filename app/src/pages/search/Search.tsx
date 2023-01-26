import { Table } from 'flowbite-react';
import pdf from '../../types/pdf';
import axios from 'axios';
import { TextInput, Label, Button } from 'flowbite-react'
import React, {useEffect} from 'react'

interface Blekk {
  id: number;
  songtitle: string;
  artist: string;
  type: string;
  filename: string;
}





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

  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState<Blekk[]>([])
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState(false)
  const cache = localStorage.getItem('pdfList');
  let cacheArray = JSON.parse(cache||"[]");

    //TODO search on change - and add match on partial word
    //TODO fix superbuggy search - it works but not as intended, returns only one result. Keeps old result if any match on new search
    const log = (query:any) => {
        setResults([]);
        console.log(results)
        console.log("Query: " + query);

        for (let i = 0; i < cacheArray.length; i++) {
            let artistName = cacheArray[i].artist.toLowerCase();
            let songTitle = cacheArray[i].songtitle.toLowerCase();
            let queryName = query.toLowerCase();

            if (artistName == queryName || songTitle == queryName) {
                const captured: Blekk[] = [{
                    id: cacheArray[i].id,
                    songtitle: cacheArray[i].songtitle,
                    artist: cacheArray[i].artist,
                    type: cacheArray[i].type,
                    filename: cacheArray[i].filename
                },]

                setResults([...results, ...captured] )
            }
        }

    }
    if (results.length == 0) {
      console.log("No results found")
    }
    console.log("ResultArray: "+results);
  








  return (
<div className="flex h-96 flex-col justify-center gap-4 p-56">
  <TextInput
      id="searchText"
      type="text"
      placeholder="Search for blex!"
      required={true}
      sizing="lg"
      onChange={(e) => setQuery(e.target.value)}
  />
  <Button onClick={()=>log(query)}>Search</Button>

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
