import axios from 'axios';
import type { Encuesta, Marcador } from './interfaces';


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


export const getEncuestas = async (): Promise<any> => {
    const response = await axios.get<Encuesta[]>(`http://localhost:8090/encuestas`);
    return response.data;
}

export const getEncuesta = async (id: string): Promise<any> => {
    const response = await axios.get<Encuesta>("http://localhost:8090/encuestas/" + id);
    return response.data;
}

export const getMarcadores = async (): Promise<any> => {
    const response = await axios.get<Marcador[]>(`http://localhost:8090/marcadores`);
    return response.data;
}