import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ec2-54-196-34-82.compute-1.amazonaws.com:8080/'

    //baseURL: 'http://localhost:8080/'
    
    //[{'Access-Control-Allow-Origin': '*'}]
});

export default instance;
