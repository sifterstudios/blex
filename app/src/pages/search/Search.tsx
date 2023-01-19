import { TextInput, Label, Button } from 'flowbite-react'
import React from 'react'

export const Search = () => {
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
</div>
  )
}
