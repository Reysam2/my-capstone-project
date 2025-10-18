import axios from "axios";


// For Vite, use import.meta.env; for Create React App, process.env is correct but must be defined at build time.
// If using Vite:
export const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
export const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export const API_URL = `https://${API_HOST}/album`;


export const fetchAlbumData = async (id) => {

  try {
    const res = await axios.get(`${API_URL}/${id}`, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    })


     
    return res.data


  } catch (error) {
   throw new Error(error.response?.data?.message || error.message || "Failed to fetch album data");

  }



}
 

