import axios from 'axios';

axios.defaults.headers.put['Content-Type'] = 'application/json'; // application/json
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
//axios.defaults.headers.common['Access-Control-Allow-Methods'] = "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//axios.defaults.withCredentials = true

export function cambiaCredencialesAxios(usuario: string, password: string) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(usuario + ':' + password);
  console.log(btoa(usuario + ':' + password))
}

