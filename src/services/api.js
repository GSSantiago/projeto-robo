import axios from "axios";

const api = axios.create(
    {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

export function get(url) {
    return api.get(url).then(response => response);
  }
  
export function post(url, payload) {
return api.post(url, payload).then(response => response);
}
