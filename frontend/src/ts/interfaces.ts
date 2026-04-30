export interface MigasProps {
    nivel2: boolean;
    titulo: string
}


export type GlobalInfo = {
    user: string,
    pass: string,
    isLogin: boolean,
    setLogin: (boolean) => void 

}

export type Login = {
    user: string,
    pass: string
};
