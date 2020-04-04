import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': 'your-api-key',
    'Accept': 'application/json'
  }
});