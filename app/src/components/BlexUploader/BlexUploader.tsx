import axios from 'axios';
import { Button, Checkbox, FileInput, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import File from 'react-dom'


interface PdfMeta {
  song: string,
  artist: string,
  type: string,
  file: ,
}

export const BlexUploader = () => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState(undefined);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
     const response = axios.post('http://localhost:8080/document/upload', {
        song,
        artist,
        type,
        file,
       });
    } catch (err) {
      
    }
  };


  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="song"
              value="Song name:"
            />
          </div>
          <TextInput
            id="song"
            type="text"
            placeholder="Beat it!"
            required={true}
            value={song}
            onChange={(e) => setSong(e.target.value)}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="artist"
              value="Artist:"
              placeholder='Michael Jackson'
            />
          </div>
          <TextInput
            id="artist"
            type="text"
            required={true}
            onChange={(e) => setArtist(e.target.value)}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="type"
              value="Type of blex (Full band, instrument specific)"
            />
          </div>
          <TextInput
            id="type"
            type="text"
            required={true}
            onChange={(e) => setType(e.target.value)}
            shadow={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" required={true} />
          <Label htmlFor="agree">
            This upload is of my own making or has been greenlit by the maker.
          </Label>
          <div className="mb-2 block">
          </div>
          <FileInput
            id="file"
            helperText="PDF fileformat only"
            onChange={(e) => setFile(e.target.files[0])}
            accept="application/pdf"
          />
        </div>
        <Button type="submit">
          UPLOAD!
        </Button>
      </form>

    </>
  )
}
