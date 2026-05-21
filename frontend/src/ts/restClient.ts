import axios from 'axios';


export const getPerfil = async (): Promise<String> => {
    const response = await axios.get<any>(`http://localhost:8090/perfil`);
    return response.data;
}

export const getOrganismos = async (): Promise<any> => {
    const response = await axios.get<any>(`http://localhost:8090/organismos`);
    return response.data;
}


export const getProvincias = async (): Promise<any> => {
    const response = await axios.get<any>(`http://localhost:8090/provincias`);
    return response.data;
}


export const getMunicipios = async (): Promise<any> => {
    const response = await axios.get<any>(`http://localhost:8090/municipios`);
    return response.data;
}
