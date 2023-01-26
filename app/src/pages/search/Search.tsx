import { TextInput, Label, Button } from 'flowbite-react'
import React, {useEffect} from 'react'
import http from "../../http-common";

export const Search = () => {
  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [error, setError] = React.useState(false)

    useEffect(() => {
    const handleSearch = async () => {
        setLoading(true)
        setMessage('')
        setError(false)

        try {
            const response = await http.get('?????/'+{query})
            //const { items } = await response.json()
            if (!items.length) {
                setMessage('No search results. Please try again.')
            }
            setResults(items)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }
    }
    const handleOnInputChange = (query:string) => {
        setQuery(query);

        setMessage('');
        setResults([]);
        setError(false);
    }

  return (
<div className="flex h-96 flex-col justify-center gap-4 p-56">
  <TextInput
    id="searchText"
    type="text"
    placeholder="Search for blex!"
    required={true}
    sizing="lg"
    onChange={(e) => handleOnInputChange(e.target.value)}
  />
<Button>Search</Button>
</div>
  )
}
