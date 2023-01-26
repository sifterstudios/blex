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
    const [query, setQuery] = React.useState('')
    const [results, setResults] = React.useState<Blekk[]>([])
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [error, setError] = React.useState(false)
    const cache = localStorage.getItem('pdfList');
    let cacheArray = JSON.parse(cache||"[]");



    const log = (queryString : string) => {
        setResults([]);
        console.log(results)
        console.log("Query: "+queryString);

        for (let i = 0; i < cacheArray.length; i++) {
            if (cacheArray[i].artist != undefined){
                //console.log("artist name " + cacheArray[i].artist.toLowerCase())
                let artistName = cacheArray[i].artist.toLowerCase();
                let queryName = queryString.toLowerCase();
               // console.log("One of theese are not like the other? " + queryName +"->" + artistName)
                if (artistName == queryName) {
                    console.log("JADDA!!!!!!" )
                    console.log(cacheArray[i].songtitle);
                    console.log(cacheArray[i].id);
                    console.log(cacheArray[i].filename);
                    const captured:Blekk[] = [{
                        id:cacheArray[i].id,
                        songtitle:cacheArray[i].songtitle,
                        artist:cacheArray[i].artist,
                        type:cacheArray[i].type,
                        filename:cacheArray[i].filename
                    }]
                    setResults([...results, ...captured])
                }
            }

        }
        if (results.length == 0) {
            console.log("No results found")
        }
            console.log("ResultArray: "+results);
    }


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
    </div>
  )
}
