import React from 'react'
import axios from "axios";
import {getCurrentUser} from "../../services/AuthService";
import authHeader from "../../services/Auth-header";

export const Settings = () => {

  const API_URL = "http://localhost:8080/";
//TODO:get user info from server....
  const getPublicContent = async () => {
      return axios.get(API_URL + "user/"+ getCurrentUser());
    }
  return (
    <div>Settings</div>
  )
}
