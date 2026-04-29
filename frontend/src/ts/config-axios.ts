import axios from 'axios';
//Por defecto la respuesta sera json
axios.defaults.headers.put['Content-Type'] = 'application/json'; // application/json

export function cambiaCredencialesAxios(usuario: string, password: string) {
  if (usuario && password) {
    axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(usuario + ':' + password);
  } else {
    axios.defaults.headers.common['Authorization'] = 'Basic ' + 'user:user';
  }
}