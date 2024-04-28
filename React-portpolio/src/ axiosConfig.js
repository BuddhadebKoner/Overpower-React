import axios from 'axios';
axios.defaults.baseURL = 'https://newsapi.org';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate';
axios.defaults.headers.common['Connection'] = 'keep-alive';
axios.defaults.headers.common['Upgrade-Insecure-Requests'] = '1';
axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
export default axios;
