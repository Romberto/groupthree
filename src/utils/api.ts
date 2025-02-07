import axios from "axios"
import { APIPATH } from "./constants"

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