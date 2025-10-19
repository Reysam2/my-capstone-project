import axios from "axios";

 
export const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
export const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export const API_URL = `https://${API_HOST}`;


export const fetchGenreData = async () => {

  try {
    const { data } = await axios.get(`https://${API_HOST}/chart/genre`, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    })


     
    return data

  } catch (error) {
   throw new Error(error.response?.data?.message || error.message || "Failed to fetch genre data");

  }



}
 

