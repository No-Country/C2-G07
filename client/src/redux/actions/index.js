import axios from 'axios'
const { REACT_APP_URL_API } = process.env;
export const GET_OBRAS_ARTES = "GET_OBRAS_ARTES";
export const GET_OBRAS_ARTES_NAME = "GET_OBRAS_ARTES_NAME";
export const GET_PERFIL_USUARIO = "GET_PERFIL_USUARIO";
export const GET_OBRAS_USUARIO = "GET_OBRAS_USUARIO";
export const GET_USUARIOS = "Get_USUARIOS";
export const getObrasArtes = (order)=>{
    return async function(distpach){
        try{
           const response =  await axios.get(`${REACT_APP_URL_API}/obraArte?order=${order}`)
           distpach({
               type: GET_OBRAS_ARTES,
               payload: response.data
           })
        }catch(error){
            console.log(error);
        }
        
    }
}

export function getObrasArtesName(name){
    return async function(distpach){
        try{
           const response =  await axios.get(`${REACT_APP_URL_API}/obraArte?name=${name}`)
           distpach({
               type: GET_OBRAS_ARTES_NAME,
               payload: response.data
           })
        }catch(error){
            console.log(error);
        }
        
    }
}

export function getPerfilUsuario(id){
    return async function(distpach){
        try{
           const response =  await axios.get(`${REACT_APP_URL_API}/usuario/${id}`)
           distpach({
               type: GET_PERFIL_USUARIO,
               payload: response.data
           })
        }catch(error){
            console.log(error);
        }
        
    }
}

export function getObrasArtesUsuario(usuarioId){
    return async function(distpach){
        try{
           const response =  await axios.get(`${REACT_APP_URL_API}/obraArteUsuario?usuarioId=${usuarioId}`)
           distpach({
               type: GET_OBRAS_USUARIO,
               payload: response.data
           })
        }catch(error){
            console.log(error);
        }
        
    }
}

export const getUsuarios = (order)=>{
    return async function(distpach){
        try{
            const response = await axios.get(`${REACT_APP_URL_API}/usuario?order=${order}`)
            distpach({
                type: GET_USUARIOS,
                payload: response.data
            })
        }catch (error){
            console.log(error);
        }
    }
}

