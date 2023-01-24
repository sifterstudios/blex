import React from 'react'
import axios from "axios";
import {getCurrentUser} from "../../services/AuthService";
import "./Settings.css";

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
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Settings</h1>
        <p className="font-normal text-gray-700 dark:text-gray-400">Username: {userData.username}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Email: {userData.email}</p>
    </div>
  )
}
