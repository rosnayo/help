//import axios from 'axios'
import {API_URL} from '../lib/Enviroments'

export const postLoginService = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const postClientFullService = async (client) => {
  try {
    client ={
      user: {
        username: client.username,
        first_name: client.first_name,
        last_name: client.last_name,
        email: client.email,
        password: client.password
      },
      nombres: client.first_name,
      apellidos: client.last_name,
      id_empresa: client.id_empresa,
      direccion: client.address,
      id_ubigeo: client.id_ubigeo,
      celular: client.celular,
      imagen: client.imagen,
      habilitado: client.habilitado,
      tipo_usuario: client.tipo_usuario
    }

    console.log("new client : ",client)
    const response = await fetch(`${API_URL}/client/full`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getUserProfile = async () =>{
  try{
    const token = localStorage.getItem('access_token');
    if(!token){
      return null;
    }
    const payload = token.split(".")[1];
    const jsonPayload = JSON.parse(window.atob(payload));
    //console.log("xxx" + jsonPayload.user_id)
    const user_id = jsonPayload.user_id;
    //console.log("xxx" + user_id)
    const response = await fetch(`${API_URL}/perfil/${user_id}`, {
      method: "GET"
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;

  }catch(error){
    console.log(error);
    return null;
  }
}

export const getPerfilByUserId = async (userId) =>{
  try{
    
    const response = await fetch(`${API_URL}/perfil/${userId}`, {
      method: "GET"
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;

  }catch(error){
    console.log(error);
    return null;
  }
}
