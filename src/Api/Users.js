import axios from "axios";

export async function getUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
} 
export async function deleteUser(id) {
  try {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}


export async function addUser(values) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users/',values);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}


export async function updateUser(id,values) {
  try {
    const response = await axios.put('https://jsonplaceholder.typicode.com/users/'+id,values);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}