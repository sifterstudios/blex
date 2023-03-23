import { Button, Checkbox, FileInput, Label, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import UploadService from "../../services/FileUploadService";
import "./BlexUploader.css";
import FormAlert from "../alerts/FormAlert";

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
  const alertMsgContainer = document.getElementById("alertMsg")
  const [validated, setValidated] = useState(false);
  const [formAlert, setFormAlert] = useState({type:"Whoops..",message:"",classes:"flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"});

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0]);
    setProgress(0);
  };

  const validateInput = (value:String) => {
    if (value.length < 1){
        setFormAlert({...formAlert,message:"Please provide both title and artist!"});
        alertMsgContainer?.classList.remove("hide")
    } else {
        alertMsgContainer?.classList.add("hide")
    }
    if (artist && song){
        setValidated(true);
    }
  }

  const upload = () => {
    if (!validated){
        setFormAlert({...formAlert,message:"Please fill in both title and artist!"});
        alertMsgContainer?.classList.remove("hide")
        return;
    }
    setProgress(0);
    if (!file){
        setFormAlert({...formAlert,message:"Please select a file!"});
        alertMsgContainer?.classList.remove("hide")
      return;
    }


    UploadService.upload(file, song, artist, type, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        //TODO: Add a success message on upload
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
          setFormAlert({...formAlert,type:"Something went wrong!", message:err.response.data.message});
            alertMsgContainer?.classList.remove("hide");
        } else
        setFile(undefined);
      });
  };

  return (
      <form action="">
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="mb-2 block self-start">
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
                onChange={(e) => {setSong(e.target.value) ;validateInput(e.target.value)}}
                shadow={true}
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-2 block self-start">
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
                onChange={(e) => {setArtist(e.target.value);validateInput(e.target.value)}}
                shadow={true}
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-2 block self-start">
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
              <div className="mb-2 block self-start">
                <Checkbox id="agree" required={true} />
                <Label htmlFor="agree" className="checkBox-label">
                  This upload is my own work or I have permission by the maker.
                </Label>
              </div>
            <div className="flex items-center gap-2">
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

          <FormAlert type={formAlert.type} message={formAlert.message} classes={formAlert.classes}></FormAlert>

        </div>
      </form>
  )
}
