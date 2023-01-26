import { Table } from 'flowbite-react';
import pdf from '../../types/pdf';
import axios from 'axios';
import { TextInput, Label, Button } from 'flowbite-react'
import React from 'react'
import "./Search.css"

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

  const cache = localStorage.getItem('pdfList');
  let cacheArray = JSON.parse(cache||"[]");

  const noResultMsg = document.getElementById("noResultMsg");
  const tableHead = document.getElementById("tableHead");

    //TODO search on change - and add match on partial word
    const log = () => {
        noResultMsg?.classList.add("hide");
        tableHead?.classList.remove("hide");
        setResults([]);
        console.log(results)
        console.log("Query: " + query);

        let captured: Blekk[] = []
        for (let i = 0; i < cacheArray.length; i++) {
            let artistName = cacheArray[i].artist.toLowerCase();
            let songTitle = cacheArray[i].songtitle.toLowerCase();
            let queryName = query.toLowerCase();

            if (artistName == queryName ||songTitle == queryName) {
                captured.push({
                    id: cacheArray[i].id,
                    songtitle: cacheArray[i].songtitle,
                    artist: cacheArray[i].artist,
                    type: cacheArray[i].type,
                    filename: cacheArray[i].filename
                });
            }
        }
        setResults([...captured] )

        if (captured.length < 1) {
          console.log("No results found")
            noResultMsg?.classList.remove("hide");
            tableHead?.classList.add("hide");
        }

    console.log("ResultArray: "+results);
    }


  return (
      <>
    <div className="flex h-96 flex-col justify-center gap-4 p-56">
          <TextInput
              id="searchText"
              type="text"
              placeholder="Search for blex!"
              required={true}
              sizing="lg"
              onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={log}>Search</Button>
            <p id="noResultMsg" className="italic hide dark:text-white">Sorry, no blex match this search...how about making and adding it?!</p>
        </div>
        <Table
            striped={true}
            hoverable={true}
        >
            <Table.Head id="tableHead" className="hide">
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
                        {results.map(result => {
                            return (
                                <Table.Row key={result.id} onClick={() => handleRowClick(result.id)} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {result.songtitle}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {result.artist}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {result.type}
                                    </Table.Cell>
                                    <Table.Cell>
                                        stars here
                                    </Table.Cell>
                                </Table.Row>

                        )})}
                    </Table.Body>
                </Table>
    </>
      )
    }
