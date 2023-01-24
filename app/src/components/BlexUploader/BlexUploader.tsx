import axios from 'axios';
import { Button, Checkbox, FileInput, Label, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import UploadService from "../../services/FileUploadService";



export const BlexUploader: React.FC = () => {

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);


  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState('');
  const [file, setFile] = useState<File | undefined>();
  const [message, setMessage] = useState('');
  const [fileInfos, setFileInfos] = useState([]);


  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0]);
    setProgress(0);
  };

  const upload = () => {
    setProgress(0);
    if (!file) return;

    UploadService.upload(file, song, artist, type, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message)
        return UploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the file!");
        }
        setFile(undefined);
      });
  };

  return (
    <div className="flex flex-col gap-4">
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
            onChange={selectFile}
            accept="application/pdf"
          />
        </div>
        <Button 
        disabled={!file}
          onClick={upload}
        >
          UPLOAD!
        </Button>

 {file && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}



    </div>
  )
}
