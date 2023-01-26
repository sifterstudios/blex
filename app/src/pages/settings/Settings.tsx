import React from 'react'
import {getCurrentUser} from "../../services/AuthService";
import "./Settings.css";
import http from '../../http-common'

export const Settings = () => {

  const[userData, setUserData] = React.useState<any>({});

    React.useEffect(() => {
       http.get("user/name/" + getCurrentUser())
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
