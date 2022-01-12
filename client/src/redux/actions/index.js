import axios from 'axios'
const { REACT_APP_URL_API } = process.env;
export const GET_OBRAS_ARTES = "GET_OBRAS_ARTES";
export const GET_OBRAS_ARTES_NAME = "GET_OBRAS_ARTES_NAME";

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
