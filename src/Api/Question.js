import axios from "axios";
import { API_URL } from "../config/utils";
export async function getAllQuestions() {  
    try {
      const response = await axios.get(`${API_URL}/`);
      console.log('response : '+response);
      return response;
    } catch (error) {
      console.error(error);
    }
} 


 
export async function getQuestionWithId(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}  


