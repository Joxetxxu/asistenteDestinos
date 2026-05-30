export interface MigasProps {
    nivel2: boolean;
    titulo: string
}


export type GlobalInfo = {
    user: string,
    pass: string,
    isLogin: boolean,
    setLogin: (arg0: boolean) => void

}

export type Login = {
    user: string,
    pass: string
};

export interface Provincia {
    CODIGO: string;
    descripcion: string;
}

export interface Municipio {
    CODIGO: string;
    descripcion: string;
    provincia: Provincia;
}

export type Position = {
    lat: number,
    lng: number,
};
export type Marcador = {
    id: number,
    name: string,
    position: Position
};

