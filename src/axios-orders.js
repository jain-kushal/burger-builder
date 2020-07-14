import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-6da90.firebaseio.com/',
});

export default instance;
