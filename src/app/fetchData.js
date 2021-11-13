import Axios from "axios";

export const  getData = async () =>{
      const response = await Axios({
        url: 'https://api.nasa.gov/planetary/apod?api_key=ONaH10sOY7ivNNM8C04o8s67Np36xWZ49ncYvRi4', 
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Methods": "GET"
        }
      }).then((response) => {
            const res = response.data
            return res;
        }).catch((error) => {
          console.log(error);
          return error;
        });
        return response;
}

