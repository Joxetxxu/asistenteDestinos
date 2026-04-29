export interface MigasProps {
    nivel2: boolean;
    titulo: string
}


export type GlobalInfo = {
    user: string,
    pass: string,
    isLogin: boolean
}

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
