import axios from "axios"
import { APIPATH, BASE_API_URL } from "./constants"

export const fetchApiPage = async (page:string) => {
    const path = `${APIPATH.ENDPOINT}${APIPATH.GETFIELDS}${APIPATH.GETPAGE}${page}`
    try {
      const response = await axios.get(path);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

export const fetchApiGetById = async(id:string) => {
    const path = `${APIPATH.ENDPOINT}/${id}${APIPATH.GETFIELDS}`
    try{
        const response = await axios.get(path) 
        return response.data
    }catch(error){
        console.error(error)
    }
}

export const fetchFavoritesById = async(ids:number[]) =>{
  try {
    const idsStr = ids.join(",");
    const response = await fetch(
      `${BASE_API_URL}/artworks?fields=id,title,artist_display,date_display,image_id&ids=${idsStr}`
    );
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error("Network error");
    }
  } catch (error) {
    return Promise.reject(error);
  }
}