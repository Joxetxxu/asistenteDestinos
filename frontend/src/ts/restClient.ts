import axios from 'axios';
import type { Post } from './interfaces';

export const getPost = async (id: number): Promise<Post> => {
    const response = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
}


export const getOrganismos = async (): Promise<any> => {
    const response = await axios.get<any>(`http://localhost:8090/organismos`);
    return response.data;
}