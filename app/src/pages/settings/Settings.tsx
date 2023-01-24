import React from 'react'
import axios from "axios";
import {getCurrentUser} from "../../services/AuthService";


export const Settings = () => {

  const API_URL = "http://localhost:8080/";
  const[userData, setUserData] = React.useState<any>({});

    React.useEffect(() => {
       axios.get(API_URL + "user/name/" + getCurrentUser())
          .then((response) => {
              setUserData(response.data)
            return response.data;
          });
    }, []);


  return (
    <div>
        <h1>Settings</h1>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
    </div>
  )
}
