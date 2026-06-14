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

export const getEncuestasOrganismo = async (id: string): Promise<any> => {
    const response = await axios.get<Encuesta[]>(`http://localhost:8090/encuestas/organismo/${id}`);
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

export const getDestinos  = async (criterio1: string, criterio2: string, criterio3: string): Promise<any> => {
    const response = await axios.get<Marcador[]>(`http://localhost:8090/asistente/${criterio1}/${criterio2}/${criterio3}`);
    return response.data;
}

export const cambiarEstadoEncuesta  = async (id: string, estado: number): Promise<any> => {
    const response = await axios.put<String>(`http://localhost:8090/encuestas/${id}/estado`, { estado });
    return response;
}

export const guardarEncuesta  = async (encuesta: Encuesta): Promise<any> => {
    const response = await axios.post<String>(`http://localhost:8090/encuestas/registrar`, encuesta);
    return response.data;
}